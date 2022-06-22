import React from "react";
import broken from '/public/images/broken.png';
import Image from 'next/image';
import router from "next/router";

let locImage
let locID : string

export default function FavouriteLocation(location : any) {
    console.log("card", location)
    if (location.location?.files[0]?.hlink == null) {
            locImage = broken;
        } else {
            locImage = location.location?.files[0]?.hlink;
        }

    if(location) {
        console.log("favou", location, location.location.trcItemDetails[0].title)
        
        locID = location.location?.id
    }


    return(
        <div className="flex flex-col">
            <Image
                className=" rounded "
                onClick={() =>
                    router.push(`description/${locID}`)
                }
                src={locImage}
                alt={"Location Image"}
                width={400}
                height={400}
            />
            <div> {location.location.trcItemDetails[0].title} </div>
        </div>
    )

}