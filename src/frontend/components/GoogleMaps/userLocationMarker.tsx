import React, { SetStateAction } from "react";


const UserLocationMarker : React.FC = () => {
    const [ userMarker, setUserMarker ] = React.useState<google.maps.Marker>()
    const [ lat, setLat ] = React.useState(0)
    const [ lng, setLng ] = React.useState(0)



    React.useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const position = pos.coords;
                    if(position){
                        setLat(position.latitude);
                        setLng(position.longitude);
                    }
                }
            )
        }
        navigator.geolocation.watchPosition((pos) => {
            setLat(pos.coords.latitude)
            setLng(pos.coords.longitude)
        })

    })


    React.useEffect(() => {
        if (!userMarker) {
            setUserMarker(new google.maps.Marker({
                position: {lat, lng},
                icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillOpacity: 1,
                strokeWeight: 2,
                fillColor: '#5384ED',
                strokeColor: '#ffffff',}}
                ))
        }
  
        return () => {
            if (userMarker) {
                userMarker.setMap(null)
            }
        }
    }, [userMarker])

    React.useEffect(() => {
        setUserMarker(new google.maps.Marker({
            position: {lat, lng},
            icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillOpacity: 1,
            strokeWeight: 2,
            fillColor: '#5384ED',
            strokeColor: '#ffffff',}}
            ))

            return () => {
                if (userMarker) {
                    userMarker.setMap(null)
                }
            }
    }, [lat, lng])
    return null
}

export default UserLocationMarker