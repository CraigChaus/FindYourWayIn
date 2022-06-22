import React, { useState } from 'react';
import Categories from './Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from 'public/markerIcons';
import { useTranslation } from 'react-i18next';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import ActivityZone from '../../public/icons/activity_zone.svg';
import Entertainment from '../../public/icons/theater_comedy.svg';
import Shop from '../../public/icons/shopping-40.svg';
import Landscape from '../../public/icons/landscape.svg';
import Attraction from '../../public/icons/attractions.svg';
import Restaurant from '../../public/icons/restaurant-40.svg';

export default function SliderMenu() {
    const { t } = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        {
            key: t('categoryShop'),
            value: {
                iconName: 'shop',
                icon: (
                    <Shop className="flex justify-center fill-green-800 stroke-green-800" />
                ),
            },
        },
        {
            key: t('categoryEat'),
            value: {
                iconName: 'eat',
                icon: (
                    <Restaurant className="flex justify-center fill-green-800 stroke-green-800" />
                ),
            },
        },
        {
            key: t('categoryActivity'),
            value: {
                iconName: 'activity',
                icon: (
                    <ActivityZone className="flex justify-center fill-green-800 stroke-green-800" />
                ),
            },
        },
        {
            key: t('categoryEntertainment'),
            value: {
                iconName: 'entertainment',
                icon: (
                    <Entertainment className="flex justify-center fill-green-800 stroke-green-800" />
                ),
            },
        },
        {
            key: t('categoryLandscape'),
            value: {
                iconName: 'landscape',
                icon: (
                    <Landscape className="flex justify-center fill-green-800 stroke-green-800" />
                ),
            },
        },
        {
            key: t('categoryAttraction'),
            value: {
                iconName: 'attraction',
                icon: (
                    <Attraction className="flex justify-center fill-green-800 stroke-green-800" />
                ),
            },
        },
    ];

    return (
        <>
            {!isOpen ? (
                <div className="flex justify-center bg-transparent ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex justify-center w-12 h-5 font-bold text-white bg-green-500 rounded-b-full hover:bg-green-700"
                    >
                        {' '}
                        <FontAwesomeIcon
                            icon={faAnglesDown}
                            size="sm"
                            className="flex justify-center mt-1 text-white"
                        />
                    </button>
                </div>
            ) : (
                <>
                    {' '}
                    <div
                        className={`drop-shadow-md   ${
                            isOpen ? 'translate-y-0' : 'translate-y-full'
                        } transition-transform duration-600`}
                    >
                        <div className="flex justify-center p-2 bg-gray-50">
                            <p className="text-xl font-bold">{t('category')}</p>
                        </div>
                        <div className="grid h-auto grid-cols-3 gap-6 p-4 bg-gray-50 rounded-b-2xl">
                            <Categories categories={categories} />
                        </div>

                        <div className="flex justify-center ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex justify-center w-12 h-5 font-bold text-white bg-green-500 rounded-b-full hover:bg-green-700 drop-shadow-md"
                            >
                                <FontAwesomeIcon
                                    icon={faAnglesUp}
                                    size="sm"
                                    className="flex justify-center mt-1 text-white "
                                />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
