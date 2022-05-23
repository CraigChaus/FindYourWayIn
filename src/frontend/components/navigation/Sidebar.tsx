import React, {useState} from 'react';
import Categories from "./Categories";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle, faBuildingColumns, faSquareParking, faToilet, faUtensils} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar (){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>

            {!isOpen?(


                <div className=" flex justify-center z-10 bg-transparent">
                    <button onClick={()=>setIsOpen(!isOpen)}
                            className=" flex justify-center bg-green-500   h-5 w-12  hover:bg-cyan-500 text-white font-bold  rounded-b-full"
                    > <svg  className="relative w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </button>


                </div>
            ):(<>

                    <div className={` p-4 h-auto  bg-zinc-100 grid grid grid-cols-3 gap-6 p-4 z-10 rounded-b-2xl ${isOpen? 'translate-y-0':'translate-y-full'} ease-in-out duration-400 `} >

                        <Categories/>
                    </div>



                    <div className="flex w-full flex-col   bg-transparent ">

                        <div className=" flex justify-center ">
                            <button onClick={()=>setIsOpen(!isOpen)}
                                    className=" flex justify-center bg-green-500   h-5 w-12  hover:bg-cyan-500 text-white font-bold  rounded-b-full"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="relative w-5 h-5 " fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7"/>
                                </svg></button>
                        </div>
                    </div>



                </>
            )

            }



        </>
    )

}

