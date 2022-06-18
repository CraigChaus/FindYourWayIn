import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CategoriesButtons = (props: any) => {
    const categories = props.categories;

    return (
        <>
            {categories.map((category: any, index: number) => (
                <div
                    key={index + 1}
                    className=" flex  justify-center  h-14 w-1/3 p-3 mt-3"
                >
                    <button className="flex flex-raw pt-1  w-full h-15 mx-2 rounded bg-green-300 hover:bg-green-500 text-black">
                        <FontAwesomeIcon
                            className="pt-1 ml-1 w-8 "
                            icon={category.iconName}
                            size="1x"
                        />
                        <p className="w-40 pt-1 text-xs font-bold">
                            {' '}
                            {category.nameOfCategory}
                        </p>
                    </button>
                </div>
            ))}
        </>
    );
};

export default CategoriesButtons;
