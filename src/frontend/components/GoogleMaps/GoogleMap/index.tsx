import React from 'react';
import { useRouter } from 'next/router';
import LocationMarker from '@components/homepage/LocationMarker';

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
    const { query } = useRouter();
    const mapRef = React.useRef<HTMLDivElement>(null);
    const markerRef = React.useRef<google.maps.Marker>(
        new google.maps.Marker(),
    );
    const [map, setMap] = React.useState<google.maps.Map>();
    // const [filteredLocations, setFilteredLocations] = React.useState<any[]>([]);
    // const [dataLocation, setDataLocation] = React.useState<any[]>([]);
    // const [bottomSlider, setBottomSlider] = React.useState<any>(null);
    // const [markers, setMarkers] = React.useState<any[]>([]);

    // const filterContext = useContext(FilterContext);

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
            console.log('update option')
        }
    }, [map]);

    // function clearMarkers() {
    //     for (let i = 0; i < markers.length; i++) {
    //         markers[i].setMap(null);
    //     }
    // }

    React.useEffect(() => {
        if (map) {
          ["click", "idle"].forEach((eventName) =>
            google.maps.event.clearListeners(map, eventName)
          );
      
          if (onClick) {
            map.addListener("click", onClick);
          }
      
          if (onIdle) {
            map.addListener("idle", () => onIdle(map));
          }
        }
      }, [map, onClick, onIdle]);

    map?.addListener('click', (mapsMouseEvent: google.maps.MapMouseEvent) => {
        clearMarker(markerRef.current);
        markerRef.current = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
        });
    });


    // React.useEffect(() => {
    //     clearMarkers();

    //     if (filteredLocations.length) {
    //         const googleMarkers = [];

    //         for (let i = 0; i < filteredLocations.length; i++) {
    //             const marker = new google.maps.Marker({
    //                 position: {
    //                     lat: parseFloat(
    //                         locations[i].location.address.gisCoordinates[0]
    //                             .xcoordinate,
    //                     ),
    //                     lng: parseFloat(
    //                         locations[i].location.address.gisCoordinates[0]
    //                             .ycoordinate,
    //                     ),
    //                 },
    //                 map: map,
    //             });
    //             googleMarkers.push(marker);
    //         }

    //         setMarkers(googleMarkers);
    //     }
    // }, [filteredLocations, map]);

    // React.useEffect(() => {
    //     setDataLocation(locations);
    //     setFilteredLocations(
    //         filterByCategory(dataLocation, filterContext.filter),
    //     );
    // }, [locations, dataLocation, filterContext.filter]);

    // React.useEffect(() => {
    //     if (query.id) {
    //         for (const location of locations) {
    //             if (location.id === query.id) {
    //                 setBottomSlider(location);
    //             }
    //         }
    //     }
    // }, [locations, query]);

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
            {/* Below marker is set for testing purposes located in Deventer.  */}
            {/* {dataLocation &&
                dataLocation.map((location: any) => {
                    return (
                        <ObjectMarker
                            id={location.id}
                            key={location.id}
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
                            clickable={true}
                            category={
                                location.trcItemCategories.types[0]
                                    .categoryTranslations[0].label
                            }
                        />
                    );
                })}
            {bottomSlider && (
                    <BottomSlider
                        id={bottomSlider?.id}
                        header={bottomSlider?.location?.label}
                        description={
                            bottomSlider.trcItemDetails[0]?.shortdescription
                        }
                        image={
                            bottomSlider.files[0]?.hlink !== undefined
                                ? bottomSlider.files[0]?.hlink
                                : ''
                        }
                        handleCloseBottomSlider={() =>  {
                            setBottomSlider(null)
                            router.replace('/home', undefined, { shallow: true })
                        }}
                    />
                )} */}
        </>
    );
};
export default GoogleMap;
