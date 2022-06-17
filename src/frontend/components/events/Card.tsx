import React from 'react';
import Image from 'next/image';
import broken from '../../public/images/broken.png';

export const Card = ({ date, event, onClick, imageSrc }: any) => {
    return (
        <>
            <div onClick={onClick} className="w-full h-1/2 ">
                <div className=" p-2 text-center h-60 m-1 ">
                    <Image
                        className="rounded-xl container"
                        src={imageSrc}
                        alt={'alt'}
                        height={220}
                        width={350}
                    />

                    {/* change text color based on image color */}

                    {imageSrc == broken ? (
                        <div className="flex flex-col relative  bottom-40">
                            <span className="pr-2 text-center text-black font-bold text-l ">
                                {date}
                            </span>
                            <span className="pl-2 text-center  text-black font-bold text-xl w-full ">
                                {event}{' '}
                            </span>
                            <button className="mt-4 mx-24  bg-green-800 rounded-md text-white font-normal">
                                Click for more
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col relative  bottom-40">
                            <span className="pr-2 text-center text-white font-bold text-l ">
                                {date}
                            </span>
                            <span className="pl-2 text-center  text-white font-bold text-xl w-full ">
                                {event}{' '}
                            </span>
                            <button className="mt-4 mx-24  bg-green-800 rounded-md text-white font-normal">
                                Click for more
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Card;
