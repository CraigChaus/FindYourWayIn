import React, { SetStateAction, useEffect } from "react";

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
    const [map, setMap] = React.useState<google.maps.Map>();
    const [configMap, setConfigMap] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {}))
        }
    }, [mapRef, map]);

    React.useEffect(() => {
        if (map) {
            map.setOptions(options);
            map.addListener('zoom_changed', () => setZoom(map.getZoom() as number))
        }

    }, [map, options])

   //  console.log("WWWWWWWWWWWWW")
   //  // useEffect (()=>{
   //  async function getAllLocations() {
   //      const res = await fetch("https://app.thefeedfactory.nl/api/locations/", {
   //              method: 'GET',
   //              headers: {
   //                  'Content-Type': 'application/json',
   //                  Authorization: `Bearer $0eebe5c7-cf95-4519-899b-59e1a78768c1`
   //              },
   //          }
   //      )
   //          .then(response => response.json())
   //          .then(res => console.log(res))
   //          .catch(err => console.error(err));
   // }
   //  // if (res.ok) {
   //  //     return res.json();
   //  // } else {
   //  //     throw new Error(await res.text());
   //  // }
   //
   //
   //  console.log("FFFF")

    return(
        <>
            <div ref={mapRef} style={style}/>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                    <div><p></p></div>
                }
            })}

        </>
    );
};
export default GoogleMap;