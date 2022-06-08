import { type } from 'os';
import React, { SetStateAction, useContext } from 'react';
import { useRef } from 'react';
import { ObjectMarker } from '../objectMarker';
import { allLocations, filterByCategory } from '../../../API/api';
import { FilterContext } from 'contexts/FilterContext';
interface MapProps extends google.maps.MapOptions {
    locations: any[];
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactElement | React.ReactElement[];
    // setZoom: React.Dispatch<SetStateAction<number>>;
}

const GoogleMap = ({
    locations,
    onClick,
    onIdle,
    children,
    style,
    // setZoom,
    ...options
}: MapProps) => {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const markerRef = React.useRef<google.maps.Marker>(
        new google.maps.Marker(),
    );
    const [map, setMap] = React.useState<google.maps.Map>();
    const [filteredLocations, setFilteredLocations] = React.useState<any[]>([]);
    const [dataLocation, setDataLocation] = React.useState<any[]>([]);

    const [markers, setMarkers] = React.useState<any[]>([]);

    const filterContext = useContext(FilterContext);

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

    function clearMarkers() {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }

    map?.addListener('click', (mapsMouseEvent: google.maps.MapMouseEvent) => {
        clearMarker(markerRef.current);
        markerRef.current = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
        });
    });

    React.useEffect(() => {
        clearMarkers();

        if (filteredLocations.length) {
            const googleMarkers = [];

            for (let i = 0; i < filteredLocations.length; i++) {
                const marker = new google.maps.Marker({
                    position: {
                        lat: parseFloat(
                            locations[i].location.address.gisCoordinates[0]
                                .xcoordinate,
                        ),
                        lng: parseFloat(
                            locations[i].location.address.gisCoordinates[0]
                                .ycoordinate,
                        ),
                    },
                    map: map,
                });
                googleMarkers.push(marker);
            }

            setMarkers(googleMarkers);
        }
    }, [filteredLocations, map]);

    React.useEffect(() => {
        setDataLocation(locations);
        setFilteredLocations(
            filterByCategory(dataLocation, filterContext.filter),
        );
    }, [locations, dataLocation, filterContext.filter]);

    // React.useEffect(() => {
    //     filteredLocations && filteredLocations.map((location: any) => {
    //         return (
    //             new google.maps.Marker({
    //                 position: {
    //                     lat: parseFloat(
    //                         location.location.address.gisCoordinates[0]
    //                             .xcoordinate),
    //                     lng: parseFloat(
    //                         location.location.address.gisCoordinates[0]
    //                             .ycoordinate,
    //                     )
    //                 },
    //                 map: map,
    //             }));
    //     })
    // }, [filteredLocations, map]);

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
                            position={{
                                lat: parseFloat(
                                    location.location.address.gisCoordinates[0]
                                        .xcoordinate,
                                ),
                                lng: parseFloat(
                                    location.location.address.gisCoordinates[0]
                                        .ycoordinate,
                                ),
                            }}
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
