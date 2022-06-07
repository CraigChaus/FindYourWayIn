import { type } from 'os';
import React, { SetStateAction } from 'react';
import { useRef } from 'react';
import { ObjectMarker } from '../objectMarker';
import { allLocations, filterByCategory } from '../../../API/api';
interface MapProps extends google.maps.MapOptions {
    locations: any[];
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactElement | React.ReactElement[];
    setZoom: React.Dispatch<SetStateAction<number>>;
}

const GoogleMap = ({
    locations,
    onClick,
    onIdle,
    children,
    style,
    setZoom,
    ...options
}: MapProps) => {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const markerRef = React.useRef<google.maps.Marker>(
        new google.maps.Marker(),
    );
    const [map, setMap] = React.useState<google.maps.Map>();
    const [filteredLocations, setFilteredLocations] = React.useState<any[]>([]);
    const [dataLocation, setDataLocation] = React.useState<any[]>([]);

    function clearMarker(marker: google.maps.Marker) {
        marker.setMap(null);
    }

    React.useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {}));
        }
    }, [mapRef, map]);

    React.useEffect(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    map?.addListener('click', (mapsMouseEvent: google.maps.MapMouseEvent) => {
        clearMarker(markerRef.current);
        markerRef.current = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
        });
    });

    React.useEffect(() => {
        setDataLocation(locations);
        setFilteredLocations(filterByCategory(dataLocation, 'Culture'));
    }, [locations, dataLocation]);

    console.log(dataLocation);
    console.log('Filtered locations', filteredLocations);
    // Testing filtering
    // const filteredShops = filterByCategory(dataLocation, 'Eat/Drink');
    // console.log('FILTERED Eat/Drink places', filteredShops);
    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No data</p>

    return (
        <>
            <div ref={mapRef} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                }
            })}
            {/* Below marker is set for testing purposes located in Deventer.  */}
            {filteredLocations &&
                filteredLocations.map((location: any, index: any) => {
                    return (
                        <ObjectMarker
                            key={index}
                            map={map}
                            objectMarkerLat={parseFloat(
                                location.location.address.gisCoordinates[0]
                                    .xcoordinate,
                            )}
                            objectMarkerLng={parseFloat(
                                location.location.address.gisCoordinates[0]
                                    .ycoordinate,
                            )}
                            category={
                                location.trcItemCategories.types[0]
                                    .categoryTranslations[0].label
                            }
                        />
                    );
                })}
        </>
    );
};
export default GoogleMap;
