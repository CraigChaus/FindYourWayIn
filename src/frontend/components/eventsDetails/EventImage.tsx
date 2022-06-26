import React from 'react';
import Image from 'next/image';
import broken from '../../public/images/broken.png';

export const EventImage = ({ idImageSrc }: any) => {
    return (
        <>
            <div className="inline w-full mt-6 align-middle  h-1/2">
                {idImageSrc === '' ? (
                    <Image
                        className="container rounded-xl"
                        src={broken}
                        alt={'alt'}
                        height={280}
                        width={385}
                    />
                ) : (
                    <Image
                        className="container rounded-xl"
                        src={idImageSrc}
                        alt={'alt'}
                        height={280}
                        width={385}
                    />
                )}
            </div>
        </>
    );
};
export default EventImage;
