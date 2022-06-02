import React from "react";

export const ContactDetails = ({ phoneNumber, email }: any) => {

  return (
    <div className="pl-2 text-left w-full">
        <h2 className="font-bold text-center underline underline-offset-8">Contact details</h2>
        <p>{phoneNumber} contacts here</p>
        <p>{email} email here</p>
        <button>Add to favourites</button>
    </div>
  )
}

export default ContactDetails;