import React from 'react';

export const AgendaInfo = ({ date, event }: any) => {
    return (
        <>
            <div className="w-full h-1/2">
                <div className="flex justify-between px-8 py-2 ml-8 mr-4 border-black border-t-2 border-b-2 border-solid mb-4">
                    <span className="pr-2">{date}</span>
                    <span className="pl-2 w-full">{event} </span>
                </div>
            </div>
        </>
    );
};

export default AgendaInfo;
