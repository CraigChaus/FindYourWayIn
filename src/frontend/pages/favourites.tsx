import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Navbar from '@components/global/DefaultNavbar';
import TabSwitch from '@components/favourites/TabSwitch';
import { useAuth } from 'contexts/AuthContext';
import { db } from 'firebase_config';
import { doc, getDoc } from 'firebase/firestore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

const Favourites: NextPage = () => {
    const { user } = useAuth();

    const [favLocsIDs, setFavLocsIDs] = useState<string[]>();
    const [favLocationsFromApi, setFavLocationsFromApi] = useState<any>();

    useEffect(() => {
        const getFavouriteLocations = async () => {
            const userRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                setFavLocsIDs(docSnap.data().favorite_locations);
                console.log('locations are retireved');
            } else {
                console.log('favourites list is empty');
            }
        };

        if (user) {
            getFavouriteLocations();
        } else console.log('user is null');
    }, [user]);

    useEffect(() => {
        async function getLocations(locationIDs: string[]) {
            const data: string[] = [];
            for (let i = 0; i < locationIDs.length; i++) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/locations/` +
                        locationIDs[i],
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
                        },
                    },
                );
                data[i] = await res.json();
            }
            setFavLocationsFromApi(data);
        }

        if (favLocsIDs) {
            getLocations(favLocsIDs);
        }
    }, [favLocsIDs]);

    return (
        <>
            <div className="h-screen bg-cover">
                <div className="flex flex-col w-full h-screen bg-opacity-70">
                    <div className="z-20">
                        <Navbar />
                    </div>
                    <div className="overflow-y-auto ">
                        <TabSwitch locations={favLocationsFromApi} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favourites;
