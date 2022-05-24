import React, {useState} from 'react';
import Categories from "./Categories";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle, faBuildingColumns, faSquareParking, faRestroom, faUtensils,
    faCartShopping,faAnglesDown,faAnglesUp} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar (){
    const [isOpen, setIsOpen] = useState(false);

    const [categories, setCategories] = useState([
        { iconeName:faCartShopping, nameOfCategory:'Grocery' },
        { iconeName:faSquareParking, nameOfCategory:'Car parking' },
        { iconeName:faRestroom, nameOfCategory:'Restroom' },
        { iconeName:faUtensils, nameOfCategory:'Restaurants' },
        { iconeName:faBicycle, nameOfCategory:'Bike parking' },
        { iconeName:faBuildingColumns, nameOfCategory:'Museums/Culture' }
    ])


    return(
        <>

            {!isOpen?(
                <div className=" flex justify-center ">
                    <button onClick={()=>setIsOpen(!isOpen)}
                            className=" flex justify-center bg-green-500   h-5 w-12  hover:bg-cyan-500 text-white font-bold  rounded-b-full"
                    >  <FontAwesomeIcon  icon={faAnglesDown} size="sm"  className=" text-white flex justify-center mt-1 "/>
                    </button>

                </div>
            ):(<>
                    <div className={` p-4 h-auto  bg-zinc-100 grid grid grid-cols-3 gap-6 p-4 z-10 rounded-b-2xl ${isOpen? 'translate-y-0':'translate-y-full'} ease-in-out duration-400 `} >
                        <Categories categories={categories} />
                    </div>

                        <div className=" flex justify-center ">
                            <button onClick={()=>setIsOpen(!isOpen)}
                                    className=" flex justify-center bg-green-500   h-5 w-12  hover:bg-cyan-500 text-white font-bold  rounded-b-full"
                            ><FontAwesomeIcon  icon={faAnglesUp} size="sm"  className=" text-white flex justify-center mt-1 "/>

                            </button>
                        </div>

                </>
            ) }

        </>
    )

}

