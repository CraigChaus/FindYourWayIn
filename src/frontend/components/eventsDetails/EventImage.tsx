import React from 'react';
import Image from 'next/image';
import broken from '../../public/images/broken.png';

export const EventImage = ({ idImageSrc }: any) => {
    console.log(idImageSrc);
    return (
        <>
            <div className=" w-full h-1/2 mt-6 inline align-middle">
                {idImageSrc === '' ? (
                    <Image 
                        className='rounded-xl container'
                        src={broken} 
                        alt={'alt'}
                        height={280}
                        width={385} />
                ) : (
                    <Image
                        className='rounded-xl container'
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
