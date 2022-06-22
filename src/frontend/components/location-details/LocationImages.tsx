import Image from 'next/image';
import React from 'react';

export const LocationImages = ({ src, alt }: any) => {
    return (
        <div className="h-auto p-2 mt-2 text-center">
            <Image
                className="rounded-xl"
                src={src}
                alt={alt}
                width={400}
                height={350}
            />
        </div>
    );
};

export default LocationImages;
