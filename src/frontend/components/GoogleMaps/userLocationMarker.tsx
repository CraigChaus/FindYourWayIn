import { Marker } from "@react-google-maps/api";
import React, { SetStateAction } from "react";

interface MarkerProps extends google.maps.MarkerOptions{
    setLat: React.Dispatch<SetStateAction<number>>
    setLng: React.Dispatch<SetStateAction<number>>
    setAddress: React.Dispatch<SetStateAction<string>>
}

const UserLocationMarker : React.FC<MarkerProps> = ({
    setLat,
    setLng,
    setAddress,
    ...options
}) => {
    const [ userMarker, setUserMarker ] = React.useState<google.maps.Marker>()
    // const [ userLat, setUserLat ] = React.useState(0)
    // const [ userLng, setUserLng ] = React.useState(0)


    React.useEffect(
        () => {
            if(!userMarker && navigator.geolocation) {
                console.log("NAVIGATOR CALLED")
                // navigator.geolocation.getCurrentPosition(
                //     (pos) => {
                //         const position = pos.coords;
                //         if(position){
                //             console.log(position.latitude, "states updated")
                //             setLat(position.latitude);
                //             setLng(position.longitude);
                //         }
                //     }
                // )
                console.log("NAVIGATOR geolocation recieved")
                navigator.geolocation.watchPosition((pos) => {
                    const position = pos.coords;
                        if(position){
                            console.log("CHANGE OF POSITION!")
                            setLat(position.latitude);
                            setLng(position.longitude);
                        }
                })
            }
        }
    )

    React.useEffect(
        () => {
            if (!userMarker) {
            setUserMarker(new google.maps.Marker({
                icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillOpacity: 1,
                strokeWeight: 2,
                fillColor: '#5384ED',
                strokeColor: '#ffffff',}}
                ))
                
            //console.log("user marker is set with", lat, lng)
            }

            return () => {
                if (userMarker) userMarker.setMap(null);
            }
        }, []
    )

    React.useEffect(
        () => {
            if(userMarker) {
                console.log("options set")
                userMarker.setOptions(options)
                //console.log("user marker is set with", userLat, userLng)
            }
        },
        [options, userMarker]
    )



    // React.useEffect(() => {
    //     if(userMarker){
    //         console.log("setpos ", userLat, userLng)
    //         userMarker.setPosition({lat: userLat, lng: userLng})
    //     }
    // }, [userMarker, userLat, userLng])
    return null
}

export default UserLocationMarker