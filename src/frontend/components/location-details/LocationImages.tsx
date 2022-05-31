import Image from 'next/image';

export const LocationImages = (props: any) => {
  return (
    <div className="h-auto p-2 mt-6">
        <Image 
          src={props.src} 
          alt={props.alt} 
          width={300}
          height={300}
        />
    </div>
  )
}

export default LocationImages 
