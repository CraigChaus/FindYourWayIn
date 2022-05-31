import Header from "../components/location-details/Header";
import Paragraph from "../components/location-details/Paragraph";
import Schedule from "../components/location-details/Schedule";
import ContactDetails from "../components/location-details/ContactDetails";
import { Fragment } from "react";
import Layout from "@components/global/Layout";

export const details = (props: any) => {
  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-full mb-1 space-y-4">
        <div className="w-auto p-2 mt-20 space-y-3">
          <Fragment>
              <Header name="Location"/>

              <Paragraph content="Content here"/>

              <Schedule />
              
              <ContactDetails/>
          </Fragment>
          </div>
      </div>
    </Layout>
  )
}

export default details;

