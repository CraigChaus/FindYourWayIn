import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle, faBuildingColumns, faSquareParking, faToilet, faUtensils} from "@fortawesome/free-solid-svg-icons";

export const Categories = () => {
    return (
        <>
            <div  className="  flex flex-col  ">

                <div className=" flex justify-center h-3/5 ">
                    <button  className="flex justify-center h-12 w-12 mx-2   hover:bg-zinc-300 rounded ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg></button>
                </div>
                <div className=" flex justify-center  h-2/5  " >
                    <p className=" font-bold text-sm ">Shops</p>
                </div>
            </div>
            <div className=" ">

                <div className=" flex justify-center h-3/5  ">
                    <button  className="flex justify-center h-12 w-12 mx-2  hover:bg-zinc-300 rounded  ">
                        <FontAwesomeIcon  icon={faSquareParking} size="2x"  className=" text-green-800 flex justify-center mt-2 "/>
                    </button>
                </div>
                <div className=" flex justify-center h-2/5   " >
                    <p className=" font-bold text-sm ">Car parking</p>
                </div>
            </div>
            <div className=" ">

                <div className=" flex justify-center h-3/5 ">
                    <button  className="flex justify-center h-12 w-12 mx-2  hover:bg-zinc-300 rounded ">
                        <FontAwesomeIcon  icon={faToilet} size="2x"  className="text-green-800 flex justify-center mt-2"/>
                    </button>
                </div>
                <div className=" flex justify-center h-2/5   " >
                    <p className=" font-bold text-sm ">Toilet</p>
                </div>
            </div>
            <div className="">

                <div className=" flex justify-center h-3/5  ">
                    <button  className="flex justify-center h-12 w-12 mx-2  hover:bg-zinc-300 rounded ">
                        <FontAwesomeIcon  icon={faUtensils} size="2x"  className="text-green-800 flex justify-center mt-2"/>
                    </button>
                </div>
                <div className=" flex justify-center h-2/5   " >
                    <p className=" font-bold text-sm ">Restaurants</p>
                </div>
            </div>
            <div className=" ">

                <div className=" flex justify-center h-3/5  ">
                    <button  className="flex justify-center h-12 w-12 mx-2  hover:bg-zinc-300 rounded ">
                        <FontAwesomeIcon  icon={faBicycle} size="2x"  className="text-green-800 flex justify-center mt-2"/>
                    </button>
                </div>
                <div className=" flex justify-center h-2/5   " >
                    <p className=" font-bold text-sm ">Bike parking</p>
                </div>
            </div>
            <div className=" ">

                <div className=" flex justify-center h-3/5  ">
                    <button  className="flex justify-center h-12 w-12 mx-2  hover:bg-zinc-300 rounded ">
                        <FontAwesomeIcon  icon={faBuildingColumns} size="2x"  className="text-green-800 flex justify-center mt-2"/>
                    </button>
                </div>
                <div className=" flex justify-center h-2/5  " >
                    <p className=" font-bold text-sm ">Museums/culture</p>
                </div>
            </div>
        </>

    )
}

export default Categories;