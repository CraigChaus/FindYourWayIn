import React from 'react';

export const ContactDetails = ({ phoneNumber, email }: any) => {
    return (
        <div className="pl-2 text-left w-full">
            <h2 className="font-bold text-center underline underline-offset-8">
                Contact details
            </h2>
            <p>{phoneNumber} ---------</p>
            <p>{email} ---------</p>
            <button className="border-2 border-blue-800">
                Add to favourites
            </button>
        </div>
    );
};

export default ContactDetails;
