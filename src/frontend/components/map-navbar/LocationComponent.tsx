//import router from "next/router";
import { useRouter } from 'next/router';


import { useState, useEffect } from 'react';


const LocationComponent = (props: any) => {


    const locationRes = props.locationRes;
    const router = useRouter();

    return (
        <>
            {locationRes.map((location: any, index: number) => (
                <div   onClick={() =>
                    router.push(`/home?id=${location.id}`)
                }
                    key={index + 1}
                    className="  flex-col w-full rounded-b-lg  border-1 pl-1 bg-gray-50 "
                >
                    <div className="  w-full h-6 text-green-900">
                        <p> {location.title}</p>
                    </div>
                    <div className="  w-full h-5 text-black text-sm">
                        <p>
                            {' '}
                            {location.street} {location.houseNumber},{' '}
                            {location.city} {location.country}.{' '}
                            {location.zipcode}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};
export default LocationComponent;
