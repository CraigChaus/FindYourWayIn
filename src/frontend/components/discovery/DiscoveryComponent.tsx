import SideBar from '../global/Sidebar';
import UserDropdown from '../global/user/Dropdown';
import LocationData from './LocationData';
import { useRouter } from 'next/router';
import CategoriesButtons from './CategoriesButtons';
import Image from 'next/image';
import Navbar from '../global/DefaultNavbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faBicycle,
    faBuildingColumns,
    faSquareParking,
    faRestroom,
    faUtensils,
    faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

export const DiscoveryComponent = ({
    locationData,
    spotID,
    spotName,
    spotImage,
    spotImageAlt,
}: any) => {
    const router = useRouter();

    const categories = [
        { iconName: faBagShopping, nameOfCategory: 'Shop' },
        { iconName: faUtensils, nameOfCategory: 'Eat/Drink' },
        { iconName: faBicycle, nameOfCategory: 'Sport' },
        { iconName: faBuildingColumns, nameOfCategory: 'Culture' },
        { iconName: faSquareParking, nameOfCategory: 'Bicycle P' },
        { iconName: faRestroom, nameOfCategory: 'Restroom' },
    ];

    return (
        <>
            <Navbar />

            <div className=" h-screen  w-full  text-black bg-white ">
                <div className="flex-col justify-center flex h-1/2 w-full   ">
                    <div className="  flex justify-center h-1/7">
                        <h1 className="  text-2xl font-bold  text-black">
                            Spotlight
                        </h1>
                    </div>

                    <div className="  w-full flex flex-col justify-center h-4/5 px-5  relative">
                        {spotImage && spotImageAlt && (
                            <Image
                                className="hover:brightness-125  "
                                src={spotImage}
                                alt={spotImageAlt}
                                width={300}
                                height={300}
                            />
                        )}
                        <span className="  inset-x-32  absolute top-30   mx-auto flex flex-col  justify-center  text-gray-300 justify-items-center">
                            <span className=" w-full text-center text-lg font-bold  ">
                                {spotName}
                            </span>
                            <button
                                onClick={() =>
                                    router.push(`description/${spotID}`)
                                }
                                className=" w-30 rounded bg-green-700 hover:bg-green-900 h-8  text-white p-1  mt-2 text-sm"
                            >
                                Click for more
                            </button>
                        </span>
                    </div>
                </div>

                <div className="flex w-full h-30  font-bold text-black justify-center pb-3 relative ">
                    <h1 className="text-xl">Locations</h1>
                </div>

                <div className="px-5 relative ">
                    <div className="flex   flex-raw border-black border-t-2 h-16 w-full flex w-full overflow-y-auto flex-raw scrollbar-hide ">
                        <CategoriesButtons categories={categories} />
                    </div>
                </div>

                <div className="flex w-full h-auto overflow-y-auto flex-raw scrollbar-hide relative bottom-5">
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
            </div>
        </>
    );
};

export default DiscoveryComponent;
