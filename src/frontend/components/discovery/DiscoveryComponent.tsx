import SideBar from '../global/Sidebar';
import UserDropdown from '../global/user/Dropdown';
import LocationData from './LocationData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@components/global/DefaultNavbar';

export const DiscoveryComponent = ({
    locationData,
    spotID,
    spotName,
    spotImage,
    spotImageAlt,
}: any) => {
    const router = useRouter();

    return (
        <div className=" h-screen  absolute w-full  text-gray-900 bg-cover bg-no-repeat bg-center bg-[url('../public/images/imageWalstraat.jpg')]  ">
            <Navbar />
            <div className="px-5">
                <div className="flex w-full h-20 border-b-4 border-white flex-raw ">
                    <div className="flex justify-center w-1/2 h-full p-3 ">
                        <button className="flex justify-center w-full pt-5 mx-2 font-bold text-white rounded h-15 hover:bg-zinc-300">
                            Suggestions
                        </button>
                    </div>
                    <div className="flex justify-center w-1/2 h-full p-3">
                        <button className="flex justify-center w-full pt-5 mx-2 font-bold text-white rounded h-15 hover:bg-zinc-300 ">
                            Favorite
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full h-10 pt-3 font-bold text-white">
                <h1>SHOPS</h1>
            </div>

            <div className="flex w-full h-auto overflow-y-auto flex-raw scrollbar-hide">
                {locationData &&
                    locationData.map((location: any, index: number) => {
                        return (
                            <LocationData
                                key={index}
                                locationName={location.locationName}
                                srcImage={location.imageSRC}
                                srcAlt={location.imageAlt}
                                locationID={location.id}
                            />
                        );
                    })}
            </div>

            <div className="flex flex-col justify-center w-full border-orange-700 h-1/3 ">
                <div className="flex justify-center pt-5 h-1/5">
                    <h1 className="font-bold text-white ">{spotName}</h1>
                </div>

                <div className="flex justify-center p-5 h-4/5">
                    <>
                        {spotImage && spotImageAlt && (
                            <Image
                                onClick={() =>
                                    router.push(`description/${spotID}`)
                                }
                                src={spotImage}
                                alt={spotImageAlt}
                                width={300}
                                height={300}
                            />
                        )}
                    </>
                </div>
            </div>
        </div>
    );
};

export default DiscoveryComponent;
