import React from 'react';

export const EventInfo = ({
    name,
    description,
    timeStart,
    timeEnd,
    housenr,
    street,
    city,
    zipcode,
    website,
}: any) => {
    return (
        <>
            <div>
                <h1 className="text-center font-bold mb-8 p-4">{name}</h1>
                <p className="text-center border-t-2 border-b-2 border-black pb-4" dangerouslySetInnerHTML={{__html: description}}>
                </p>
                <div className="mt-8 space-y-2 border-b-2 border-black ">
                    <div className="flex space-x-2">
                        <label className="font-bold">Time:</label>
                        <p>
                            {timeStart} - {timeEnd}
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <label className="font-bold">Venue:</label>
                        <p>
                            {street} , {housenr}, {zipcode}, {city}
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        {/* TODO:Add ticket here when link is caught */}
                        <label className="font-bold">Ticket:</label>
                        <p>ticket</p>
                    </div>
                    <div className="flex space-x-2">
                        <label className="font-bold">Website:</label>
                        <a href={website}>Tap me!</a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EventInfo;
