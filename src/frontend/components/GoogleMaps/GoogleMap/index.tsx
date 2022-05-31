import { type } from "os";
import React, { SetStateAction } from "react";
import { useRef } from "react";

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
        const response = await fetch("https://app.thefeedfactory.nl/api/locations", {
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
                    //console.log( res);
                    return response.json();
                }
            })
            .then(res => {
                //console.log(res.results[3].trcItemCategories.categories[0].categoryTranslations[0].label)})   //types test to get data of the shop, which first in the list
               for(let i=0;i<res.size;i++){  //need to change 20 on length of JSON object
                console.log(res.results[i].trcItemCategories.types[0].categoryTranslations[0].label)}



                for (let i = 0; i < res.size; i++) {
                    if(res.results[i].trcItemCategories.types[0].catid==='4.6.10'||
                        res.results[i].trcItemCategories.types[0].catid==='4.6.22'||
                        res.results[i].trcItemCategories.types[0].catid==='2.1.2'){
                        // console.log(res.results[0].trcItemCategories.types[0].categoryTranslations[0].label)
                        const newObj = {
                            "category":"shop",
                            "country": res.results[i].location.address.country,
                            "city": res.results[i].location.address.city,
                            "street": res.results[i].location.address.street,
                            "houseNumber": res.results[i].location.address.housenr,
                            "zipcode":res.results[i].location.address.zipcode
                        }
                        filteredArray.push(newObj);
                    }
                    if(res.results[i].trcItemCategories.types[0].catid==='3.2.6'||
                        res.results[i].trcItemCategories.types[0].catid==='2.11.10'||
                        res.results[i].trcItemCategories.types[0].catid==='4.6.15'){
                        // console.log(res.results[0].trcItemCategories.types[0].categoryTranslations[0].label)
                        const newObj = {
                            "category":"cafe",
                            "country": res.results[i].location.address.country,
                            "city": res.results[i].location.address.city,
                            "street": res.results[i].location.address.street,
                            "houseNumber": res.results[i].location.address.housenr,
                            "zipcode":res.results[i].location.address.zipcode
                        }
                        filteredArray.push(newObj);
                    }

                    if(res.results[i].trcItemCategories.types[0].catid==='2.1.1'||
                        res.results[i].trcItemCategories.types[0].catid==='2.11.11'||
                        res.results[i].trcItemCategories.types[0].catid==='2.2.19'){
                        // console.log(res.results[0].trcItemCategories.types[0].categoryTranslations[0].label)
                        const newObj = {
                            "category":"culture",
                            "country": res.results[i].location.address.country,
                            "city": res.results[i].location.address.city,
                            "street": res.results[i].location.address.street,
                            "houseNumber": res.results[i].location.address.housenr,
                            "zipcode":res.results[i].location.address.zipcode
                        }
                        filteredArray.push(newObj);
                    }

                }


            })
            .catch(e => {
                console.log('There has been a problem with your fetch operation: ' + e.message);
            });

        console.log(filteredArray);

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

        </>
    );
};
export default GoogleMap;