import Image from 'next/image';

// for now, the image container only has 1 image
const ImageContainer = (props: any) => {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            width="100%"
            layout="responsive"
            objectFit="cover"
            quality={100}
            height="40%"
            className="rounded-t-lg max-h-60"
        />
    );
};

export default ImageContainer;
