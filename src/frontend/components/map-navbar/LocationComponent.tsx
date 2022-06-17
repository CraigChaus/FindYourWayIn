import router, { Router, useRouter } from 'next/router';
import React from 'react';

const LocationComponent = (props: any) => {
    const { query } = useRouter();
    const locationRes = props.locationRes;
    React.useEffect(() => {
        if (query.id) {
            for (const location of props.dataLocation) {
                if (location.id === query.id) {
                    props.setBottomSlider(location);
                }
            }
        }
    }, [props.dataLocation, query]);

    return (
        <>
            {locationRes.map((location: any, index: number) => (
                <div
                    onClick={() => router.push(`/home?id=${location.id}`)}
                    key={index + 1}
                    className="  flex-col w-full rounded-b-lg  border-1 pl-1 bg-gray-50 hover:bg-gray-200"
                >
                    <div className="w-full h-6 text-green-900 ">
                        <p> {location.title}</p>
                    </div>
                    <div className="w-full h-5 text-sm text-black ">
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
