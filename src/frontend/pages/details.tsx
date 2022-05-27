import LocationImages from "../components/location-details/LocationImages";
import Header from "../components/location-details/Header";
import Paragraph from "../components/location-details/Paragraph";
import Schedule from "../components/location-details/Schedule";
import ContactDetails from "../components/location-details/ContactDetails";
import { Fragment } from "react";


export const details = () => {
  return (
    <>
    <div className="flex flex-col justify-center mb-1 border-3 h-full w-full space-y-4 ">
        <div className="w-auto p-2 space-y-3 ">
        <Fragment>
            <LocationImages />
            <Header/>
            <Paragraph/>
        </Fragment>
        </div>
        <div className = "flex justify-center space-x-1 w-auto h-auto">
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
