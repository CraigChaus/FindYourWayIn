import { type } from "os";
import React, { SetStateAction } from "react";
import { useRef } from "react";
import { ObjectMarker } from "../objectMarker";

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

    type destinationPoint = {
        destLat: number;
        destLng: number;
        locationCategory: string;
    }

    console.log("DRAFT")
    const filteredArray: { country: any; city: any; street: any; houseNumber: any; zipcode: any; }[]= [];

    async function getAllLocations() {
        let res = new Object();
         await fetch("https://app.thefeedfactory.nl/api/locations", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1`
                },
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    res=response.clone(); // made it to avoid problems with dowble consuming object
                    return response.json();
                }
            })
            .then(res => {

                for (let i = 0; i < res.size; i++) {
              
                    let location:any;

                    switch(res.results[i].trcItemCategories.types[0].categoryTranslations[0].label){
                     case "Shop":
                     location = createNewLocation(res,i,"shop",null)
                     break;

                     case "Eat/Drink":
                     location = createNewLocation(res,i,"cafe",null)    
                     break;

                     case "Culture":
                     location =  createNewLocation(res,i,"cafe",null)    
                     break;

                     case "Shop Eat/Drink":
                     location = createNewLocation(res,i,"shop","cafe")    
                     break;

                     case "Sport":
                     location =  createNewLocation(res,i,"sport",null)    
                     break;
                    }
                    
                    filteredArray.push(location);
                }
            })
            .catch(e => {
                console.log('There has been a problem with your fetch operation: ' + e.message);
            });

        console.log(filteredArray);
    }

        function createNewLocation(res:any,i:any,label1:string, label2:any){
                     const newLocation = {
                       "category":{
                        "category1":label1,
                        "category2":label2
                    },
                    "country": res.results[i].location.address.country,
                    "city": res.results[i].location.address.city,
                    "street": res.results[i].location.address.street,
                    "houseNumber": res.results[i].location.address.housenr,
                    "zipcode":res.results[i].location.address.zipcode,
                    "xcoordinate":res.results[i].location.address.gisCoordinates[0].xcoordinate,
                    "ycoordinate":res.results[i].location.address.gisCoordinates[0].ycoordinate
                }
                return newLocation
       }

    getAllLocations().then(data =>{
            return data;

    });

    map?.addListener("click", (mapsMouseEvent: google.maps.MapMouseEvent) => {
        clearMarker(markerRef.current);
        markerRef.current = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map
        });
    });

    const destinationPoints:any[] = [];
    
    function getDestCoordinates(): void { 
    // TODO: Get the actual info from API

        //The following object is static and set to Deventer for testing purposes
        const nextDest: destinationPoint = {
            destLat: 52.2661,
            destLng: 6.1552,
            locationCategory: "Station"
        }
        destinationPoints.push(nextDest);

    }

    function addMarkers(): void { 
    // TODO: here the actual markers are put on the map

    // for (const dest of destinationPoints) {
    //     const marker = new google.maps.Marker({
    //         position: { lat: dest.destLat, lng: dest.destLng },
    //         map: map,
    //     });
    // }  
}
    getDestCoordinates();
    addMarkers();
    
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