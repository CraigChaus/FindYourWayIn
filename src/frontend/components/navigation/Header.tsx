
import MenuBar from "../MenuBar";
import SearchInputForm from "../SearchInputForm";

import Sidebar from "./Sidebar";

import { FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import {
    faUser
} from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return (
        <div className="flex w-full flex-col   bg-transparent z-10">

            <div id="header" className="flex justify-start h-18 bg-zinc-100 bg-green-500 z-10 ">

                 <MenuBar/>
                <SearchInputForm/>

                <button  className="justify-center h-11 w-12   bg-green-400 hover:bg-green-600 text-white    rounded-full m-3 "
                > <FontAwesomeIcon  icon={faUser} size="lg"  className=" justify-center "/>
                </button>

            </div>

            <Sidebar/>

        </div>
     )
}

export default Header;