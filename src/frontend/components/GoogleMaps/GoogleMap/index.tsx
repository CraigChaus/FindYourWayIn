import { type } from 'os';
import React, { SetStateAction } from 'react';
import { useRef } from 'react';
import { ObjectMarker } from '../objectMarker';
import { allLocations, filterByCategory } from '../../../API/api';

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactElement | React.ReactElement[];
    setZoom: React.Dispatch<SetStateAction<number>>;
}

const GoogleMap: React.FC<MapProps> = ({
    onClick,
    onIdle,
    children,
    style,
    setZoom,
    ...options
}) => {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const markerRef = React.useRef<google.maps.Marker>(
        new google.maps.Marker(),
    );
    const [map, setMap] = React.useState<google.maps.Map>();
    const [filteredLocations, setFilteredLocations] = React.useState<any[]>([]);
    const [dataLocation, setDataLocation] = React.useState<any[]>([]);
    const [isLoading, setLoading] = React.useState(false);

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

    React.useEffect(() => {
        setLoading(true);
        fetch('https://app.thefeedfactory.nl/api/locations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1`,
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDataLocation(data.results);
                setLoading(false);
            })
            .catch((e) => {
                throw new Error(`HTTP error! status: ${e.status}`);
            });
    }, []);

    map?.addListener('click', (mapsMouseEvent: google.maps.MapMouseEvent) => {
        clearMarker(markerRef.current);
        markerRef.current = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
        });
    });

    React.useEffect(() => {
        setFilteredLocations(filterByCategory(dataLocation, 'Culture'));
    }, [dataLocation]);

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
            {dataLocation &&
                dataLocation.map((location: any, index: any) => {
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
