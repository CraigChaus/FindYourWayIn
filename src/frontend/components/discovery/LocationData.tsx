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
        <div className=" flex flex-col justify-center h-full w-1/3 p-2">
            <div className="flex justify-center h-4/5">
                <div className="flex justify-center w-24 h-24 rounded-full  ">
                    <>
                        {srcImage && srcAlt && (
                            <Image
                                onClick={() =>
                                    router.push(`description/${locationID}`)
                                }
                                src={srcImage}
                                alt={srcAlt}
                                width={300}
                                height={300}
                            />
                        )}
                    </>
                </div>
            </div>
            <div className="  flex justify-center h-1/5">
                <p className="text-white  text-lg font-medium ">
                    {locationName}
                </p>
            </div>
        </div>
    );
};

export default LocationData;
