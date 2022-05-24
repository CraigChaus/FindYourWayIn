import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBicycle, faBuildingColumns, faSquareParking, faToilet, faUtensils, faCartShopping} from "@fortawesome/free-solid-svg-icons";

export const Categories = (props) => {
    const categories = props.categories;
    const iconeName = props.iconeName;
    const nameOfCategory = props.nameOfCategory;
    

    return (
        <>
            {categories.map((categorie)=>(
                <div  className="  flex flex-col  ">

                    <div className=" flex justify-center h-3/5 ">
                        <button  className="flex justify-center h-12 w-12 mx-2   hover:bg-zinc-300 rounded ">
                            <FontAwesomeIcon  icon={categorie.iconeName} size="2x"  className=" text-green-800 flex justify-center mt-2 "/>
                        </button>
                    </div>
                    <div className=" flex justify-center  h-2/5  " >
                        <p className=" font-bold text-sm ">{categorie.nameOfCategory}</p>
                    </div>
                </div>  
            ))}

        </>

    )
}

export default Categories;