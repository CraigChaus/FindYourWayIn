import React from 'react';

export const UpcomingInfo = ({ upDate, upEvent, onClick }: any) => {
    return (
        <>
            <div onClick={onClick}>
                <div className="flex justify-between px-8 py-2 ml-8 mr-4 border-black border-t-2 border-b-2 border-solid">
                    <span className="pr-2">{upDate}</span>
                    <span className="pl-2 w-full">{upEvent}</span>
                </div>
            </div>
        </>
    );
};
export default UpcomingInfo;