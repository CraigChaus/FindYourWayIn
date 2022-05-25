import { type } from "os";
import React, { SetStateAction } from "react";

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
    const [ map, setMap ] = React.useState<google.maps.Map>();
    const [ configMap, setConfigMap ] = React.useState<boolean>(false);

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

    }, [map, options]);
    
    type destinationPoint = {
        destLat: number;
        destLng: number;
        locationCategory: string;
    }


    let destinationPoints:any[] = [];
    
    function getDestCoordinates(): void { 
    // TODO: Get the info from API
  let nextDest: destinationPoint = {
      destLat: 52.2661,
      destLng:6.1552,
      locationCategory: "deventer"
  }
   destinationPoints.push(nextDest);

}

    function addMarkers(): void { 
    // TODO: here the actual map is put on the map
    for (const dest of destinationPoints) {
        const marker = new google.maps.Marker({
        position: { lat: dest.destLat, lng: dest.destLng },
        map: map,
  });
    }  
}
    getDestCoordinates();
    addMarkers();
 

  

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