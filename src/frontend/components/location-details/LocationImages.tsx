import Image from 'next/image';
import React from 'react';

export const LocationImages = ({ src, alt }: any) => {
  return (
    <div className="h-auto p-2 mt-6">
        <Image 
          src={src} 
          alt={alt} 
          width={300}
          height={300}
        /> 
    </div>
  )
}

export default LocationImages 
