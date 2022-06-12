import React, { useState } from 'react';
import Categories from './Categories';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBicycle,
    faBuildingColumns,
    faSquareParking,
    faRestroom,
    faUtensils,
    faAnglesDown,
    faAnglesUp,
    faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

export default function SliderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { iconName: faBagShopping, nameOfCategory: 'Shop' },
        { iconName: faUtensils, nameOfCategory: 'Eat/Drink' },
        { iconName: faBicycle, nameOfCategory: 'Sport' },
        { iconName: faBuildingColumns, nameOfCategory: 'Culture' },
    ];

    return (
        <>
            {!isOpen ? (
                <div className=" z-10 flex justify-center bg-transparent ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="z-10 flex justify-center w-12 h-5 font-bold text-white bg-green-500 rounded-b-full hover:bg-green-700  shadow-lg"
                    >
                        {' '}
                        <FontAwesomeIcon
                            icon={faAnglesDown}
                            size="sm"
                            className="flex justify-center mt-1 text-white "
                        />
                    </button>
                </div>
            ) : (
                <> <div className={`drop-shadow-xl   ${
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                } transition-transform duration-600`}>
                    <div className=" flex  justify-center bg-zinc-100 p-2">
                        <p className="font-bold text-xl">Categories</p>
                    </div>
                    <div className="p-4 h-auto bg-zinc-100 grid grid-cols-3 gap-6 rounded-b-2xl">
                        <Categories categories={categories} />
                    </div>

                    <div className="flex justify-center ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex justify-center w-12 h-5 font-bold text-white bg-green-500 rounded-b-full hover:bg-green-700"
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
