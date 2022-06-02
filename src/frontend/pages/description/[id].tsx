import Header from "../../components/location-details/Header";
import Paragraph from "../../components/location-details/Paragraph";
import Schedule from "../../components/location-details/Schedule";
import ContactDetails from "../../components/location-details/ContactDetails";
import React from "react";
import Layout from "@components/global/Layout";

const idPlace = "6280f61e8b779766af33c4bd";
let nameOfLocation = " ";
let description = " ";
let calendar = {}



export const details = (props: any) => {
  const [calendar, setCalendar] = React.useState({}); 

  React.useEffect(() => {
    getLocation();
  }, [])

  const getLocation = async () => {
    fetch(`https://app.thefeedfactory.nl/api/locations/${idPlace}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1`
      },
    })
      .then(async response => {
        return await response.json();
      })
      .then(data => {
        setCalendar(data.calendar.patternDates[0].opens);
        nameOfLocation = data.location.label,
        description = data.trcItemDetails[0].longdescription
        console.log(data.calendar.patternDates[0].opens);
      })
  
      .catch(error => {
        throw new Error(`HTTP error! status: ${error.status}`);
      })
  }
  
  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-full mb-1 space-y-4">
        <div className="w-auto p-2 mt-20 space-y-3">
          <>
              <Header name={nameOfLocation}/>

              <Paragraph content={description}/>

              <Schedule calendar={calendar} />
              
              <ContactDetails/>
          </>
          </div>
      </div>
    </Layout>
  )
}

export default details;

