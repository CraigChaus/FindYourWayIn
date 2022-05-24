import LocationImages from "../components/location-details/LocationImages";
import Header from "../components/location-details/Header";
import Paragraph from "../components/location-details/Paragraph";
import Schedule from "../components/location-details/Schedule";
import ContactDetails from "../components/location-details/ContactDetails";
import { Fragment } from "react";


export const details = () => {
  return (
    <>
    <div className="flex flex-col justify-center w-full h-full mb-1 space-y-4 border-3 ">
        <div className="w-auto p-2 space-y-3 ">
        <Fragment>
            <LocationImages />
            <Header/>
            <Paragraph/>
        </Fragment>
        </div>
        <div className = "flex justify-center w-auto h-auto space-x-1">
        <Fragment>
            <Schedule />
            <ContactDetails/>
        </Fragment>
        </div>
    </div>
    </>
  )
}

export default details;

