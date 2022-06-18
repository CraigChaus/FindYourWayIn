import React from 'react';
import Image from 'next/image';
import logo_without_text from '../../public/logo_without_text.png';

export default function NoDataCard() {
    return (
        <>
            <div className=" p-2 text-center h-60 m-1 ">
                <Image
                    className="rounded-xl container"
                    src={logo_without_text}
                    alt={'logo'}
                    height={220}
                    width={350}
                />
                <div className="flex flex-col relative  bottom-40">
                    <span className="pl-2 text-center  text-black font-bold text-xl w-full ">
                        No events yet...
                    </span>
                </div>
            </div>
        </>
    );
}
