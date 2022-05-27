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



    console.log("DRAFT")
    var filterforSopsh: { country: any; city: any; street: any; houseNumber: any; zipcode: any; }[]= [];
    var filterforCulture= [];

    async function getAllLocations() {
        var res = new Object();
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
                    res=response.clone();
                    //console.log( res);
                    return response.json();
                }
            })
            .then(res => {
                //console.log(res.results[3].trcItemCategories.categories[0].categoryTranslations[0].label)})   //types test to get data of the shop, which first in the list
               for(var i=0;i<res.size;i++){  //need to change 20 on length of JSON object
                   console.log(res.results[i].trcItemCategories.types[0].categoryTranslations[0].label)}



                for (let i = 0; i < res.size; i++) {  //need to change 20 on length of JSON object
                  if(res.results[i].trcItemCategories.types[0].categoryTranslations[0].label==='Overige winkels'){
                     // console.log(res.results[0].trcItemCategories.types[0].categoryTranslations[0].label)
                      let newObj = {
                          "country": res.results[i].location.address.country,
                          "city": res.results[i].location.address.city,
                          "street": res.results[i].location.address.street,
                          "houseNumber": res.results[i].location.address.housenr,
                          "zipcode":res.results[i].location.address.zipcode
                      }
                      filterforSopsh.push(newObj);
                  }

                    if(res.results[i].trcItemCategories.types[0].categoryTranslations[0].label==='Bezienswaardigheid'){
                        // console.log(res.results[0].trcItemCategories.types[0].categoryTranslations[0].label)
                        let newObj = {
                            "country": res.results[i].location.address.country,
                            "city": res.results[i].location.address.city,
                            "street": res.results[i].location.address.street,
                            "houseNumber": res.results[i].location.address.housenr,
                            "zipcode":res.results[i].location.address.zipcode
                        }
                        filterforCulture.push(newObj);
                    }
                }


            })
            .catch(e => {
                console.log('There has been a problem with your fetch operation: ' + e.message);
            });

        console.log(filterforSopsh);
        console.log(filterforCulture.length);

    }


    getAllLocations().then(data =>{
            return data;

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

        </>
    );
};
export default GoogleMap;