import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Navbar from '@components/global/DefaultNavbar';
import TabSwitch from '@components/favourites/TabSwitch';
import { useAuth } from 'contexts/AuthContext';
import { db } from 'firebase_config';
import {
    doc,
    getDoc,
} from 'firebase/firestore';

// export async function getStaticProps() {

// }



const Favourites : NextPage = () =>{


    const { user }  = useAuth();

    const [favLocsIDs, setFavLocsIDs] = useState<string[]>();
    const [favLocationsFromApi, setFavLocationsFromApi] = useState<any>();

    
    console.log("user id", user)
    useEffect(() => {
        const getFavouriteLocations = async () => {
        
            const userRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                setFavLocsIDs(docSnap.data().favorite_locations)
                console.log('locations are retireved');
            } else {
                console.log("favourites list is empty")
            }

        }

        if(user){
            getFavouriteLocations();
            console.log("data is requested")
        }
        else
            console.log("user is null")
    }, [user])

    useEffect(() => {
        console.log("Your fav locations: ", favLocsIDs)
        async function getLocations(locationIDs : string[]) {
            let data : string[] = [];
            for (const location of locationIDs) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations/` + location, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
                    },
                });
                data = data + await res.json();
            }
            setFavLocationsFromApi(data)
        }

        if(favLocsIDs){
            console.log("Setting locations from api")
            getLocations(favLocsIDs)
        }

    }, [favLocsIDs])

    useEffect(() => {
        console.log("location objects", favLocationsFromApi)
    }, [favLocationsFromApi])
    


    return <>
        
        <div className="h-screen bg-landing-page bg-cover">
            <div className="flex flex-col h-screen bg-gray-600 bg-opacity-70">
                <Navbar />
                
                
                <TabSwitch locations={favLocationsFromApi}/>
                

            </div>
        </div>
    </>
}


export default Favourites;


