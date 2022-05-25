import { Marker } from "@react-google-maps/api";
import React, { SetStateAction } from "react";


const UserLocationMarker : React.FC = () => {
    const [ userMarker, setUserMarker ] = React.useState<google.maps.Marker>()
    const [ userLat, setUserLat ] = React.useState(0)
    const [ userLng, setUserLng ] = React.useState(0)



    React.useEffect(() => {
        if(navigator.geolocation){
            console.log("NAVIGATOR CALLED")
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const position = pos.coords;
                    if(position){
                        console.log(position.latitude, "states updated")
                        setUserLat(position.latitude);
                        setUserLng(position.longitude);
                    }
                }
            )
            console.log("NAVIGATOR geolocation recieved")
            navigator.geolocation.watchPosition((pos) => {
                const position = pos.coords;
                    if(position){
                        console.log("CHANGE OF POSITION!")
                        setUserLat(position.latitude);
                        setUserLng(position.longitude);
                    }
            })
        }
        

    })


    React.useEffect(() => {
        
        if (!userMarker && userLat > 0) {
            console.log("useeffect", userLat, userLng)
            console.log("!USER MARKER")
            console.log("assigning" ,userLat, userLng)
            setUserMarker(new google.maps.Marker({
                position: {lat:userLat, lng:userLng},
                icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillOpacity: 1,
                strokeWeight: 2,
                fillColor: '#5384ED',
                strokeColor: '#ffffff',}}
                ))
        }
  
        // return () => {
        //     if (userMarker) {
        //         userMarker.setMap(null)
        //     }
        // }
    }, [userMarker, userLat])

    React.useEffect(() => {
        if(userMarker){
            console.log("setpos ", userLat, userLng)
            userMarker.setPosition({lat: userLat, lng: userLng})
        }
    }, [userMarker, userLat, userLng])
    return null
}

export default UserLocationMarker