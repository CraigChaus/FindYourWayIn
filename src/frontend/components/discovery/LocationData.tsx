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
        <div
            data-cy="location-item"
            className="flex flex-col justify-center w-1/3 h-full p-2 mt-4 "
        >
            <div className="flex justify-center h-4/5">
                <div className="flex justify-center w-44 h-38 drop-shadow-lg hover:scale-125 ">
                    <>
                        {srcImage && srcAlt && (
                            <Image
                                className="rounded "
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
            <div className="flex justify-center h-20 ">
                <p className="pt-3 text-sm font-medium text-center text-black ">
                    {locationName}
                </p>
            </div>
        </div>
    );
};

export default LocationData;
