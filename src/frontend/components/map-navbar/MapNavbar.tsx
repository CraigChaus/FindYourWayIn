import SideBar from '../global/Sidebar';
import SearchBar from './SearchInputForm';
import SliderMenu from './SliderMenu';
import React from 'react';
import UserDropdown from '../global/user/Dropdown';

export const Navbar = () => {
    return (
        <div className="z-10 flex flex-col w-full bg-transparent">
            <div
                id="header"
                className="z-10 flex items-center justify-between bg-green-500 h-18"
            >
                <SideBar />
                <SearchBar />
                <UserDropdown />
            </div>
            <SliderMenu />
        </div>
    );
};

export default Navbar;
