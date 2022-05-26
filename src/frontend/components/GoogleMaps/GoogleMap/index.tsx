import React, { SetStateAction } from "react";
import GoogleMarker from "../GoogleMarker";
import { useRef } from "react";

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactElement;
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
    const markerRef = React.useRef<google.maps.Marker>(new google.maps.Marker);
    const [ map, setMap ] = React.useState<google.maps.Map>();
    const [ configMap, setConfigMap ] = React.useState<boolean>(false);

    function clearMarker(marker: google.maps.Marker) {
        marker.setMap(null);
    }

    React.useEffect(() => {
        if( mapRef.current && !map ){
            setMap( new window.google.maps.Map(mapRef.current, {} ))
        }
    }, [ mapRef, map ]);

    React.useEffect(() => {
        if (map) {
            map.setOptions(options);
            map.addListener('zoom_changed', () => setZoom(map.getZoom() as number))
        }

    }, [map, options, setZoom]);

    map?.addListener("click", (mapsMouseEvent: google.maps.MapMouseEvent) => {
        clearMarker(markerRef.current);
        markerRef.current = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map
        });
    });

    return(
        <>
            <div ref={mapRef} style={style}/>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    );
};
export default GoogleMap;