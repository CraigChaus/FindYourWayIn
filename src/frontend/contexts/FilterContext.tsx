import { createContext, useContext, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const FilterContext = createContext<any>({});

export const FilterContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [filter, setFilter] = useState<any>('All');

    const handleSetFilter = (filter: string) => {
        setFilter(filter);
    };

    const filterValue = {
        filter,
        handleSetFilter,
    };

    return (
        <FilterContext.Provider value={filterValue}>
            {children}
        </FilterContext.Provider>
    );
};
