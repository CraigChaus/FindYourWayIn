import SideBar from "./Sidebar";
import React from "react";
import UserDropdown from "./user/Dropdown";

export const Navbar = () => {
    
    
    return (
        <div className="fixed z-10 flex flex-col w-full bg-transparent">

            <div id="header" className="z-10 flex items-center justify-between bg-green-500 h-18">

                <SideBar/>

                <UserDropdown/>

            </div>
        </div>
    )
}

export default Navbar;