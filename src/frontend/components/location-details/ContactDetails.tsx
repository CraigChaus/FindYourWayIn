import React from 'react';
import { useAuth } from 'contexts/AuthContext';

export const ContactDetails = ({ phoneNumber, email }: any) => {
    const { user } = useAuth();
    const addToFavorites = () => {
        // TODO: write the actual firebase command to add location id
    };

    return (
        <div className="pl-2 text-left w-full">
            <h2 className="font-bold text-center underline underline-offset-8">
                Contact details
            </h2>
            <p>{phoneNumber} ---------</p>
            <p>{email} ---------</p>
            <button
                className="border-2 border-blue-800"
                onClick={() => console.log(`user logging:${user.uid}`)}
            >
                Add to favourites
            </button>
        </div>
    );
};

export default ContactDetails;
