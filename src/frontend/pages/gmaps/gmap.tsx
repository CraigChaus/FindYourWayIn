import React from "react";


interface MapProps extends google.maps.MapOptions {
    style : { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
  }
  


const Map: React.FC<MapProps> = ({onClick}) => {

    //const Map: React.FC<{}> = () => {};

    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
    if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
    }
    }, [ref, map]);
    
    return <div ref={ref} />
}

export default Map;