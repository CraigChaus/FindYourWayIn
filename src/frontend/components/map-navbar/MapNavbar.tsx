import SideBar from '../global/Sidebar';
import SearchBar from './SearchInputForm';
import SliderMenu from './SliderMenu';
import React from 'react';
import UserDropdown from '../global/user/Dropdown';

export const Navbar = ({ setBottomSlider, dataLocation }: any) => {
    return (
        <div className="fixed z-10 flex flex-col w-full bg-transparent">
            <div
                id="header"
                className="z-10 flex items-center justify-between bg-green-500 h-18"
            >
                <SideBar />
                <div className="flex justify-end">
                    <SearchBar
                        setBottomSlider={setBottomSlider}
                        dataLocation={dataLocation}
                    />
                    <UserDropdown />
                </div>
            </div>
            <SliderMenu />
        </div>
    );
};

export default Navbar;
