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
    faBagShopping
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
            <Navbar/>

        <div className=" h-screen  w-full  text-black bg-white top-32">

            <div className="flex-col justify-center border-orange-700 flex h-1/2 w-full  ">
                <div className="  flex justify-center h-1/5 ">
                    <h1 className="   font-bold  text-black">{spotName}</h1>
                </div>

                <div className="flex justify-center h-4/5 p-5">
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

            <div className="flex w-full h-30  font-bold text-black justify-center pb-3">
                <h1 className="text-xl">Locations</h1>
            </div>


            <div className="px-5">
                <div className="flex   flex-raw border-black border-t-2 h-20 w-full flex w-full overflow-y-auto flex-raw scrollbar-hide ">
                <CategoriesButtons categories={categories}/>
                </div>
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

        </div>
        </> );
};

export default DiscoveryComponent;
