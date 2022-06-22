import LocationData from './LocationData';
import { useRouter } from 'next/router';
import CategoriesButtons from './CategoriesButtons';
import Image, { StaticImageData } from 'next/image';
import Navbar from '../global/DefaultNavbar';
import ActivityZone from '../../public/icons/activity_zone-20.svg';
import Entertainment from '../../public/icons/theater-20.svg';
import Shop from '../../public/icons/shopping-20.svg';
import Landscape from '../../public/icons/landscape-20.svg';
import Attraction from '../../public/icons/attractions-20.svg';
import Restaurant from '../../public/icons/restaurant-20.svg';
import { filterByCategory } from '@utils/filter';
import { categoryList } from '../GoogleMaps/objectMarker';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useRef, useState } from 'react';
import { FilterContext } from 'contexts/FilterContext';
import { findLocation } from '@utils/filter';
import broken from '../../public/images/broken.png';

export const DiscoveryComponent = ({
    locationData,
    spotID,
    spotName,
    spotImage,
    spotImageAlt,
}: any) => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const filterContext = useContext(FilterContext);
    const [filteredData, setFilteredData] = useState<any>(null);
    const [dataArray, setDataArray] = useState<any[]>([]);
    const enhancedCategories: any[] = [];

    categoryList.forEach((cat: any) => {
        const enhancedCategory = {
            categoryName: cat.categorization,
            items: findLocation(cat.child, locationData),
        };
        enhancedCategories.push(enhancedCategory);
    });

    const categories = [
        {
            key: t('categoryShop'),
            value: {
                iconName: 'shop',
                icon: (
                    <Shop className="flex justify-center mr-2 fill-green-800" />
                ),
            },
        },
        {
            key: t('categoryEat'),
            value: {
                iconName: 'eat',
                icon: (
                    <Restaurant className="flex justify-center mr-2 fill-green-800" />
                ),
            },
        },
        {
            key: t('categoryActivity'),
            value: {
                iconName: 'activity',
                icon: (
                    <ActivityZone className="flex justify-center mr-3 fill-green-800" />
                ),
            },
        },
        {
            key: t('categoryEntertainment'),
            value: {
                iconName: 'entertainment',
                icon: (
                    <Entertainment className="flex justify-center mr-2 fill-green-800" />
                ),
            },
        },
        {
            key: t('categoryLandscape'),
            value: {
                iconName: 'landscape',
                icon: (
                    <Landscape className="flex justify-center mr-2 fill-green-800" />
                ),
            },
        },
        {
            key: t('categoryAttraction'),
            value: {
                iconName: 'attraction',
                icon: (
                    <Attraction className="flex justify-center mr-2 fill-green-800" />
                ),
            },
        },
    ];

    const locImage = useRef(broken);
    const locName = useRef('');

    useEffect(() => {
        console.log(locationData);
        setFilteredData(
            filterByCategory(filterContext.filter, enhancedCategories),
        );
    }, [filterContext.filter, locationData]);

    useEffect(() => {
        if (filteredData?.length) {
            const resultLocation = [];
            console.log(filteredData);

            for (let i = 0; i < filteredData.length; i++) {
                //data checking stage
                if (filteredData[i]?.files === []) {
                    locImage.current = broken;
                } else if (filteredData[i]?.files[0]?.hlink == null) {
                    locImage.current = broken;
                } else {
                    locImage.current = filteredData[i]?.files[0]?.hlink;
                }

                if (filteredData[i]?.trcItemDetails[0]?.title == '') {
                    locName.current = 'Under Construction';
                } else {
                    locName.current = filteredData[i]?.trcItemDetails[0]?.title;
                }

                resultLocation.push({
                    id: filteredData[i]?.id,
                    imageSRC: locImage.current,
                    imageAlt: 'alt',
                    locationName: locName.current,
                });
            }
            setDataArray(resultLocation);
        }
    }, [filteredData]);

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

                <div className="relative flex w-full h-auto overflow-y-auto flex-raw scrollbar-hide bottom-5">
                    {dataArray &&
                        dataArray.map((location: any, index: number) => {
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
