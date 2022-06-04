import { type } from "os";
import React, { useState } from "react";

export const ObjectMarker = (props:any) =>{
    let objectIcon = "";
    const category = props.category;

    switch(category){
        case "Shop":
        objectIcon =""
        break;

        case "Eat/Drink":
        objectIcon =""
        break;

         case "Culture":
        objectIcon =""
        break;

         case "Sport":
        objectIcon =""
        break;

        default:
        objectIcon ="";
    }


       new google.maps.Marker({
            position: { lat: props.objectMarkerLat, lng: props.objectMarkerLng },
            map: props.map,
            icon: objectIcon 
        });

        console.log("SELECTED CATEGORY:",category)
    
    return null;

}