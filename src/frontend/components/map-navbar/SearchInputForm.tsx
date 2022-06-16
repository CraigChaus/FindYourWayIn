import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import LocationComponent from './LocationComponent';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export const SearchInputForm = () => {
    const [locationFound, setLocationFound] = useState<any>([]);
    const [locationSearch, setLocationSearch] = useState('');

    const searchForLocations = async (query: string): Promise<any> => {
        const result = await fetch(`${apiUrl}/locations/?search=${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        });
        return (await result.json()).results;
    };

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        setLocationSearch(input.value);
    };
    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(locationSearch);
            if (query) {
                const response = await searchForLocations(query);
                setLocationFound(response);
            }
        })();
    }, [locationSearch]);

    const locationRes = [];
    console.log(locationFound);
    for (let i = 0; i < locationFound.length; i++) {
        locationRes.push({
            title: locationFound[i].location.label,
            street: locationFound[i].location.address.street,
            houseNumber: locationFound[i].location.address.housenr,
            city: locationFound[i].location.address.city,
            country: locationFound[i].location.address.country,
            zipcode: locationFound[i].location.address.zipcode,
        });
    }

    for (let i = 0; i < locationRes.length; i++) {
        console.log(i + ') res: ' + locationRes[i].title);
    }

    const [isShown, setIsShown] = useState(true); // this states we needed for slide-bar to show and collapse

    return (
        <>
            <div className="flex-col ">
                <form onSubmit={(event) => search(event)}>
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="w-5 h-5 fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                            >
                                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                            </svg>
                        </span>
                        <input
                            id="searchText"
                            onMouseLeave={() => setIsShown(false)}
                            onMouseEnter={() => setIsShown(true)} //to make slideBar open and closed depends on focus
                            className="w-full h-8 py-2 pl-10 pr-4 my-5 text-lg bg-green-400 border border-green-500 rounded-md shadow-sm placeholder:text-white placeholder:font-italitc focus:outline-none"
                            placeholder="Search a place "
                            type="text"
                        />
                        {isShown && (
                            <div className="absolute  bg-gray-50 w-full rounded-b-lg overflow-y-scroll">
                                {locationSearch && (
                                    <p className="font-medium pt-2">
                                        Results for {locationSearch}:
                                    </p>
                                )}

                                <LocationComponent locationRes={locationRes} />
                            </div>
                        )}
                    </label>
                </form>
            </div>
        </>
    );
};

export default SearchInputForm;
