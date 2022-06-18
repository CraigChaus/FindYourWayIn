import Image from 'next/image';
import { useRouter } from 'next/router';

export const LocationData = ({
    locationName,
    srcImage,
    srcAlt,
    locationID,
}: any) => {
    const router = useRouter();

    return (
        <div className=" flex flex-col justify-center h-full w-1/3 p-2 mt-5">
            <div className="flex justify-center h-4/5">
                <div className="flex justify-center w-44 h-38 hover:scale-125">
                    <>
                        {srcImage && srcAlt && (
                            <Image
                                className=" rounded "
                                onClick={() =>
                                    router.push(`description/${locationID}`)
                                }
                                src={srcImage}
                                alt={srcAlt}
                                width={400}
                                height={400}
                            />
                        )}
                    </>
                </div>
            </div>
            <div className="  flex justify-center h-1/5">
                <p className="text-white text-base font-medium ">
                    {locationName}
                </p>
            </div>
        </div>
    );
};

export default LocationData;
