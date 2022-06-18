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
import { useTranslation } from 'react-i18next';

export const Categories = (props: any) => {
    const categories = props.categories;
    const iconName = props.iconName;
    const nameOfCategory = props.nameOfCategory;

    const filterContext = useContext(FilterContext);
    const { t } = useTranslation('common');

    return (
        <>
            {categories.map((category: any, index: number) => (
                <div key={index + 1} className="flex flex-col">
                    <div className="flex justify-center h-3/5">
                        <button
                            className="flex justify-center w-12 h-12 mx-2 rounded hover:scale-125 hover:-translate-y-2 hover:bg-gray-300"
                            onClick={() => {
                                filterContext.handleSetFilter(
                                    category.value.iconName,
                                );
                            }}
                        >
                            {category.value.icon}
                        </button>
                    </div>
                    <div className="flex justify-center h-2/5">
                        <p className="text-sm font-medium ">{category.key}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Categories;
