import React, { useContext } from 'react';
import Router, { useRouter } from 'next/router';
import LocationMarker from '@components/homepage/LocationMarker';
import { filterByCategory } from '@utils/filter';
import { FilterContext } from 'contexts/FilterContext';

interface MapProps extends google.maps.MapOptions {
    locations: any[];
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactElement | React.ReactElement[];
    setBottomSlider: any;
    enhancedCategories: any[];
}

const GoogleMap = ({
    locations,
    onClick,
    onIdle,
    children,
    style,
    setBottomSlider,
    enhancedCategories,
    ...options
}: MapProps) => {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();
    const [filteredLocations, setFilteredLocations] = React.useState<any[]>([]);
    const [dataLocation, setDataLocation] = React.useState<any[]>([]);
    // const [bottomSlider, setBottomSlider] = React.useState<any>(null);
    const [markers, setMarkers] = React.useState<any[]>([]);

    const filterContext = useContext(FilterContext);

    React.useEffect(() => {
        setDataLocation(locations);
        setFilteredLocations(
            filterByCategory(filterContext.filter, enhancedCategories),
        );
    }, [locations, filterContext.filter, enhancedCategories]);

    console.log(filteredLocations);

    React.useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {}));
        }
    }, [mapRef, map]);

    React.useEffect(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map]);

    function clearMarkers() {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }

    React.useEffect(() => {
        clearMarkers();
        if (filteredLocations.length === locations.length - 1) {
            setMarkers([]);
        }

        else if (filteredLocations.length) {
            const googleMarkers = [];
            for (let i = 0; i < filteredLocations.length; i++) {
            
                    const marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(
                                filteredLocations[i].location.address.gisCoordinates[0]
                                    ?.xcoordinate,
                            ),
                            lng: parseFloat(
                                filteredLocations[i].location.address.gisCoordinates[0]
                                    ?.ycoordinate,
                            ),
                        },
                    });
                    googleMarkers.push(marker);
                }
            setMarkers(googleMarkers);
        }
    }, [dataLocation, filteredLocations]);

    React.useEffect(() => {
        if (map) {
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
        }
    }, [map, markers]);

    React.useEffect(() => {
        if (map) {
            ['click', 'idle'].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName),
            );

            if (onClick) {
                map.addListener('click', onClick);
            }

            if (onIdle) {
                map.addListener('idle', () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);

    map?.addListener('click', () => {
        setBottomSlider(null);
        Router.replace('/home');
    });

    return (
        <>
            <div ref={mapRef} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                }
            })}
            <LocationMarker
                onClick={() => {
                    map?.setOptions(options);
                }}
            />
        </>
    );
};
export default GoogleMap;
