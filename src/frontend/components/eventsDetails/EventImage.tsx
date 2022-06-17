import React from 'react';
import Image from 'next/image';
import broken from '../../public/images/broken.png';

export const EventImage = ({ idImageSrc }: any) => {
    console.log(idImageSrc);
    return (
        <>
            <div className="h-auto p-2 mt-6 inline align-middle">
                {idImageSrc === '' ? (
                    <Image src={broken} alt={'alt'} width={300} height={300} />
                ) : (
                    <Image
                        src={idImageSrc}
                        alt={'alt'}
                        width={300}
                        height={300}
                    />
                )}
            </div>
        </>
    );
};
export default EventImage;
