import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterContext } from 'contexts/FilterContext';
import { useContext } from 'react';

export const CategoriesButtons = (props: any) => {
    const categories = props.categories;
    const filterContext = useContext(FilterContext);

    return (
        <>
            {categories.map((category: any, index: number) => (
                <div
                    key={index + 1}
                    className=" flex justify-center h-14 p-3 mt-1"
                >
                    <button
                        onClick={() =>
                            filterContext.handleSetFilter(
                                category.value.iconName,
                            )
                        }
                        className="px-3 drop-shadow-md flex flex-raw pt-1 w-auto h-15 mx-2 rounded bg-green-300 hover:bg-green-500 text-black"
                    >
                        {category.value.icon}
                        <span className="w-auto pt-1 text-xs font-bold whitespace-nowrap">
                            {category.key}
                        </span>
                    </button>
                </div>
            ))}
        </>
    );
};

export default CategoriesButtons;
