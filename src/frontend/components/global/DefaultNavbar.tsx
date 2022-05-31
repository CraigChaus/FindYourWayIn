import SideBar from "./Sidebar";
import { FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import UserButton from "./UserButton";

export const Navbar = () => {
    
    
    return (
        <div className="fixed z-10 flex flex-col w-full bg-transparent">

            <div id="header" className="z-10 flex items-center justify-between bg-green-500 h-18">

                <SideBar/>

                <UserButton/>

            </div>
        </div>
     )
}

export default Navbar;