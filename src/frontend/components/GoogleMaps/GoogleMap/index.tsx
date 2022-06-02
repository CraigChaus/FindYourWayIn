import { type } from "os";
import React, { SetStateAction } from "react";
import { useRef } from "react";
import { ObjectMarker } from "../objectMarker";
import { getAllLocations, filterByCategory } from "../../../API/api"


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
    const markerRef = React.useRef<google.maps.Marker>(new google.maps.Marker)
    const [ map, setMap ] = React.useState<google.maps.Map>();
    const [filteredLocations, setFilteredLocations] = React.useState([]);
    const filteredList:any[] = [];

    function clearMarker(marker: google.maps.Marker) {
        marker.setMap(null);
    }

    React.useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {}))
        }
    }, [mapRef, map]);

    React.useEffect(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);


    getAllLocations(filteredList).then(data =>{
            return data;
    });

    console.log("New refactored list");
    console.log(filteredList);


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
                    <div><p></p></div>
                }
            })}
            {/* Below marker is set for testing purposes located in Zwolle.  */}
        <ObjectMarker map={map} objectMarkerLat={52.5168} objectMarkerLng={6.0830}></ObjectMarker>
        </>
    );
};
export default GoogleMap;