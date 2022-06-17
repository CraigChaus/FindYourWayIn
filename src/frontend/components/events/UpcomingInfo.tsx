import React from 'react';
import Image from 'next/image';

export const UpcomingInfo = ({ upDate, upEvent, onClick, upImageSrc }: any) => {
    return (
        <>
            <div onClick={onClick} className="w-full h-1/2">
                <div className="px-4 text-center h-60 m-1 p-2 border-1 border-black">
                    <Image
                        className="rounded-xl"
                        src={upImageSrc}
                        alt={'alt'}
                        height={270}
                        width={400}
                    />
                    <div className="flex flex-col relative  bottom-40">
                        <span className="pr-2 text-center">{upDate}</span>
                        <span className="pl-2 text-center w-full ">
                            {upEvent}{' '}
                        </span>
                        <button className="mt-4 mx-24 ">Click for more</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default UpcomingInfo;
