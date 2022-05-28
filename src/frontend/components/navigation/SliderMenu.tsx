import React, {useState} from 'react';
import Categories from "./Categories";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle, faBuildingColumns, faSquareParking, faRestroom, faUtensils,
    faCartShopping,faAnglesDown,faAnglesUp} from "@fortawesome/free-solid-svg-icons";

export default function SliderMenu (){
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { iconName:faCartShopping, nameOfCategory:'Grocery' },
        { iconName:faSquareParking, nameOfCategory:'Car parking' },
        { iconName:faRestroom, nameOfCategory:'Restroom' },
        { iconName:faUtensils, nameOfCategory:'Restaurants' },
        { iconName:faBicycle, nameOfCategory:'Bike parking' },
        { iconName:faBuildingColumns, nameOfCategory:'Museums/Culture' }
    ]


    return(
        <>

            {!isOpen?(
                <div className="flex justify-center ">
                    <button onClick={()=>setIsOpen(!isOpen)}
                            className="flex justify-center w-12 h-5 font-bold text-white bg-green-500 rounded-b-full hover:bg-cyan-500"
                    >  <FontAwesomeIcon  icon={faAnglesDown} size="sm"  className="flex justify-center mt-1 text-white "/>
                    </button>

                </div>
            ):(<>
                    <div className={` p-4 h-auto bg-zinc-100 grid grid grid-cols-3 gap-6 p-4 z-10 rounded-b-2xl ${isOpen? 'translate-y-0':'translate-y-full'} ease-in-out duration-400 `} >
                        <Categories categories={categories} />
                    </div>

                        <div className="flex justify-center ">
                            <button onClick={()=>setIsOpen(!isOpen)}
                                    className="flex justify-center w-12 h-5 font-bold text-white bg-green-500 rounded-b-full hover:bg-cyan-500"
                            ><FontAwesomeIcon  icon={faAnglesUp} size="sm"  className="flex justify-center mt-1 text-white "/>

                            </button>
                        </div>

                </>
            ) }

        </>
    )

}

