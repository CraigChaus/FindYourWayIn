import LocationData from './LocationData';
import { useRouter } from 'next/router';
import CategoriesButtons from './CategoriesButtons';
import Image from 'next/image';
import Navbar from '../global/DefaultNavbar';

import {
    faBicycle,
    faBuildingColumns,
    faSquareParking,
    faRestroom,
    faUtensils,
    faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const DiscoveryComponent = ({
    locationData,
    spotID,
    spotName,
    spotImage,
    spotImageAlt,
}: any) => {
    const router = useRouter();
    const { t } = useTranslation('common');

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
            <div className="w-full h-screen text-black bg-white ">
                <div data-cy="spotlight" className="flex flex-col justify-center w-full h-1/2 ">
                    <div className="flex justify-center h-1/7">
                        <h1 data-cy="spotlight-header" className="text-2xl font-bold text-black ">
                            {t('spotlight')}
                        </h1>
                    </div>

                    <div className="relative flex flex-col justify-center w-full px-5 h-4/5">
                        {spotImage && spotImageAlt && (
                            <Image
                                className="hover:brightness-125 "
                                src={spotImage}
                                alt={spotImageAlt}
                                width={300}
                                height={300}
                            />
                        )}
                        <span className="absolute flex flex-col justify-center mx-auto text-gray-300 inset-x-32 top-30 justify-items-center">
                            <span className="w-full text-lg font-bold text-center ">
                                {spotName}
                            </span>
                            <button
                                data-cy="spotlight-button"
                                onClick={() =>
                                    router.push(`description/${spotID}`)
                                }
                                className="h-8 p-1 mt-2 text-sm text-white bg-green-700 rounded w-30 hover:bg-green-900"
                            >
                                {t('clickForMore')}
                            </button>
                        </span>
                    </div>
                </div>

                <div className="relative flex justify-center w-full pb-3 font-bold text-black h-30 ">
                    <h1 className="text-xl">{t('location_other')}</h1>
                </div>

                <div className="relative px-5 ">
                    <div data-cy="category" className="flex w-full h-16 overflow-y-auto border-t-2 border-black flex-raw scrollbar-hide ">
                        <CategoriesButtons categories={categories} />
                    </div>
                </div>

                <div data-cy="location-items" className="relative flex w-full h-auto overflow-y-auto flex-raw scrollbar-hide bottom-5">
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
