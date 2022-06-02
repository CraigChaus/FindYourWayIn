import Header from "../../components/location-details/Header";
import Paragraph from "../../components/location-details/Paragraph";
import Schedule from "../../components/location-details/Schedule";
import ContactDetails from "../../components/location-details/ContactDetails";
import React from "react";
import Layout from "@components/global/Layout";
import LocationImages from "@components/location-details/LocationImages";
import { useRouter } from 'next/router';


export const details = (props: any): JSX.Element => {
  let url = '';
  const router = useRouter();
  const { id } = router.query;

  

  const [locationName, setLocationName] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [calendar, setCalendar] = React.useState(null); 
  const [imgSrc, setImgSrc] = React.useState(null);
  const [imgAlt, setImgAlt] = React.useState<any>(null);
  const [phoneNumber, setPhoneNumber] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  
  //the url aand the id are passd in here for rendering
  React.useEffect(() => {
    url = `https://app.thefeedfactory.nl/api/locations/6280fef98b779766af33c4e6`
  }, [id]);
  
  React.useEffect(() => {
    console.log(url);
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1'
        },
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);

          //api data for time table(schedule)
          setCalendar(data.calendar.patternDates[0].opens);

          //api data for name of the location
          setLocationName(data.location.label);

          //api data for the description of the place
          setDescription(data.trcItemDetails[0].longdescription);

          //image of the place is caught here
          setImgSrc(data.files[0].hlink);
          setImgAlt('alt');

          //phone number of the place is put here
          setPhoneNumber(data.contactinfo.phone.number);

          //email address for the place is put here
          setEmail(data.contactinfo.mail.email);
        })
    
        .catch(error => {
          throw new Error(`HTTP error! status: ${error.status}`);
      })
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center w-full h-full mb-1 space-y-4">
        <div className="w-auto p-2 mt-20 space-y-3">
          <>
              { imgSrc && imgAlt && <Header name={locationName} src={imgSrc} alt={imgAlt}/> }

              <Paragraph content={description}/>
              
              { calendar && <Schedule calendar={calendar} /> }
                
              { (phoneNumber && email) ? 
              <ContactDetails phoneNumber={phoneNumber} email={email} /> 
              : <ContactDetails phoneNumber="" email="" />
            
            }

          </>
          </div>
      </div>
    </Layout>
  )
}

export default details;

