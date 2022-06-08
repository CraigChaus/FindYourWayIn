import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBicycle,
    faBuildingColumns,
    faSquareParking,
    faToilet,
    faUtensils,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { FilterContext } from 'contexts/FilterContext';
import { useContext } from 'react';

export const Categories = (props: any) => {
    const categories = props.categories;
    const iconName = props.iconName;
    const nameOfCategory = props.nameOfCategory;

    const filterContext = useContext(FilterContext);

    return (
        <>
            {categories.map((category: any, index: number) => (
                <div key={index + 1} className="flex flex-col">
                    <div className="flex justify-center h-3/5">
                        <button className="flex justify-center w-12 h-12 mx-2 rounded hover:bg-zinc-300 "
                            onClick={() => {filterContext.handleSetFilter(category.nameOfCategory)}}
                        >
                            <FontAwesomeIcon
                                icon={category.iconName}
                                size="2x"
                                className="flex justify-center mt-2 text-green-800 "
                            />
                        </button>
                    </div>
                    <div className="flex justify-center h-2/5">
                        <p className="text-sm font-medium ">
                            {category.nameOfCategory}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Categories;
