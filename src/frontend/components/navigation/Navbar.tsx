
import SideBar from "../Sidebar";
import SearchBar from "../SearchInputForm";
import { FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import SliderMenu from "./SliderMenu";
import React from "react";

export const Navbar = () => {
    
    
    return (
        <div className="z-10 flex flex-col w-full bg-transparent">

            <div id="header" className="z-10 flex items-center justify-between bg-green-500 h-18">

                <SideBar/>

                <SearchBar/>

                <button className="justify-center w-12 m-3 text-white bg-green-400 rounded-full h-11 hover:bg-green-600 "
                > <FontAwesomeIcon  icon={faUser} size="lg"  className="justify-center "/>
                </button>

            </div>

            <SliderMenu/>

        </div>
     )
}

export default Navbar;