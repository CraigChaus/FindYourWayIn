import React, { useEffect } from 'react';
import broken from '/public/images/broken.png';
import Image from 'next/image';
import router from 'next/router';

let locImage;

export default function FavouriteLocation(location: any) {
    const [locID, setLocID] = React.useState();
    console.log('card', location);
    if (location.location?.files[0]?.hlink == null) {
        locImage = broken;
    } else {
        locImage = location.location?.files[0]?.hlink;
    }

    useEffect(() => {
        if (location) {
            console.log(
                'favou',
                location,
                location.location.trcItemDetails[0].title,
            );

            setLocID(location.location?.id);
        }
    }, [location]);

    return (
        <div className="flex rounded-xl my-1 outline-offset-2 flex-col bg-white border-0.5 border-indigo-900 drop-shadow-md">
            <Image
                className="rounded-t-xl w-full"
                onClick={() => router.push(`description/${locID}`)}
                src={locImage}
                alt={'Location Image'}
                width={350}
                height={250}
            />
            <div className="p-1 font-semibold">
                {' '}
                {location.location.trcItemDetails[0].title}{' '}
            </div>
            <div className="px-1 pb-1">
                {' '}
                {location.location.location.address.street}{' '}
                {location.location.location.address.housenr},{' '}
                {location.location.location.address.city}
            </div>
        </div>
    );
}
