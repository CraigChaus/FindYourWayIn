import { type } from "os";
import React, { useState } from "react";

export const ObjectMarker = (props:any) =>{

       new google.maps.Marker({
            position: { lat: props.objectMarkerLat, lng: props.objectMarkerLng },
            map: props.map,
        });
    
    return null;

}