import Image from 'next/image';

// for now, the image container only has 1 image
const ImageContainer = (props: any) => {
    return (
        <Image src={props.src} alt={props.alt} className="object-cover rounded-t-lg"/>
    )
}

export default ImageContainer;
