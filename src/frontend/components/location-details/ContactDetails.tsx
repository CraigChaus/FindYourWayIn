import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import { db } from 'firebase_config';
import {
    doc,
    setDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    getDoc,
} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import Call from '../../public/icons/call.svg';
import Mail from '../../public/icons/mail.svg';
import Add from '../../public/icons/add.svg';
import Website from '../../public/icons/largerWebsite.svg';

export const ContactDetails = ({ phoneNumber, email, id, website }: any) => {
    console.log(id);
    const { user } = useAuth();
    const { t } = useTranslation('common');

    // When add to favorites button is clicked, first checks if the user has
    // "favorite_locations" field in the db.
    // If does: adds the location
    // if not: creates the field
    const addToFavorites = async () => {
        if (user) {
            // The "userRef" is a reference to the user document in the database
            const userRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                await updateDoc(userRef, {
                    favorite_locations: arrayUnion(id),
                });
                // defaultly user objects have an empty object in their favorites.
                //Below line deletes the initial object.
                await updateDoc(userRef, {
                    favorite_locations: arrayRemove(''),
                });
                console.log('new location added to the users favorites!');
            } else {
                await setDoc(doc(db, 'users', user.uid), {
                    favorite_locations: [id],
                    favorite_events: [],
                });
            }
        } else {
            // this else block is for testing purposes. Will delete later.
            console.log('error in adding to favorites!');
        }
    };

    return (
        <div className="flex flex-col w-full  pt-4 space-y-2 text-left">
            <div className="flex text-lg font-medium">
                <Call className="mr-4" />
                <a href={`tel:${phoneNumber}`}>
                    {phoneNumber ? phoneNumber : 'No phone number provided'}
                </a>{' '}
            </div>

            <div className="flex text-lg font-medium">
                <Mail className="mr-4" />
                <a href={`mailto:${email}`}>
                    {email ? email : 'No email provided'}
                </a>
            </div>
            <div className="flex text-lg font-medium">
                <Website className="mr-4" />
                <a href={website}>
                    {website ? website : 'No website provided'}
                </a>
            </div>
            <button
                className="flex border-2 border-green-800 rounded-lg text-white bg-green-800 items-center justify-center text-xl font-semibold"
                onClick={addToFavorites}
            >
                <Add className="fill-white" />
                {t('addToFavorite')}
            </button>
        </div>
    );
};

export default ContactDetails;
