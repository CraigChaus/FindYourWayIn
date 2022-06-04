<<<<<<< HEAD
import React from 'react'
import DayInfo from '@components/eventsDetails/DayInfo';
import EventImage from '@components/eventsDetails/EventImage';
import EventInfo from '@components/eventsDetails/EventInfo';
=======
import AgendaInfo from '@components/events/AgendaInfo';
import { UpcomingInfo } from '@components/events/UpcomingInfo';
import { deleteApp } from 'firebase/app';
import React from 'react';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;
>>>>>>> 2a7d0ff586acbf792f084dde8ff425b34dc0f8fb

export async function getStaticPaths() {
    const res = await fetch(`${apiUrl}/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data = await res.json();
    const dataArray = data.results;
    const paths = dataArray.map((event: any) => {
        return {
            params: { id: event.id },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: { params: { id: string } }) {
    const id = context.params.id;
    const res = await fetch(`${apiUrl}/events/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
<<<<<<< HEAD
  }

  export const Events = ({ data }: any): JSX.Element => {

    //These are for the image of the event
    // const [imgSrc, setImgSrc] = React.useState(null);
    // const [imgAlt, setImgAlt] = React.useState<any>(null);

    //TODO: uncomment code line above me

    //This is for the day number of the event
    const [dayOfEvent, setDayOfEvent] = React.useState(null);

    //This is for the event name, time, venue, ticket info and website
=======
}

export const Agenda = ({ data }: any): JSX.Element => {
    //creating an instance of the event name and day as usestates (FOR CURRENT EVENTS)
>>>>>>> 2a7d0ff586acbf792f084dde8ff425b34dc0f8fb
    const [eventName, setEventName] = React.useState(null);
    const [eventStartTime, setEventStartTime] = React.useState(null);
    const [eventendTime, setEventEndTime] = React.useState(null);

    //this is for the event description
    const [eventDescription, setEventDescription] = React.useState(null);

<<<<<<< HEAD
    //this is for the venue
    const [eventStreetVenue, setEventStreetVenue] = React.useState(null);
    const [eventHouseNumVenue, setEventHouseNumVenue] = React.useState(null);
    const [eventZipCodeVenue, setEventZipCodeVenue] = React.useState(null);
    const [eventCityVenue, setEventCityVenue] = React.useState(null);

    // const [ticket, setTicket] = React.useState(null);
    const [eventWebSite, setWebsite] = React.useState(null);

    React.useEffect(() => {
     //This is for setting up the image src and alt
      // setImgSrc(data.files[0].hlink);
      // setImgAlt('alt');

      //TODO: uncomment these set up above me

     //this is for setting up the day
     const dayNumber = data.calendar.singleDates[0].date;

     //here the date string is split into the day number and the month number
     const dayNumberInstance = dayNumber.substring(8,10);
     setDayOfEvent(dayNumberInstance);

     //this is for setting up the event name 
     setEventName(data.location.label);

     //this is for setting up the event time
     setEventStartTime(data.calendar.singleDates[0].when[0].timestart);
     setEventEndTime(data.calendar.singleDates[0].when[0].timeend);

     //this is for setting up the venue of the event
      setEventHouseNumVenue(data.location.address.housenr);
      setEventStreetVenue(data.location.address.street);
      setEventZipCodeVenue(data.location.address.zipcode);
      setEventCityVenue(data.location.address.city);

      //this is for stting up the event description
      setEventDescription(data.trcItemDetails[0].longdescription)

     //this is for the ticket info for the event
      // setTicket();

     //this is for setting up the website
       setWebsite(data.contactinfo.urls[0].url);

    }, [data]);

    console.log(data);

  return (
    <>
    <div className='text-center font-bold text-2xl m-4'>
      <h1>Event Details</h1>
    </div>
      <div className='flex w-full h-full mt-8'>
        <div className='m-4 p-4'>
            <DayInfo eventday = {dayOfEvent}/>
        </div>
        <div>
            <EventImage/>
            <EventInfo name = {eventName} 
                      description = {eventDescription}
                      timeStart = {eventStartTime}
                      timeEnd = {eventendTime}
                      housenr = {eventHouseNumVenue}
                      street = {eventStreetVenue}
                      city = {eventCityVenue}
                      zipcode = {eventZipCodeVenue}
                      website = {eventWebSite}/>
        </div>
      </div>
    </>
  )
}
export default Events;
=======
    React.useEffect(() => {
        //api data for the date of the event

        //this is the instance of the devices current date and time
        const today = new Date();

        //here the date string is split into the day number and the month number
        const todayDateNumber = today.getDate();
        const thisMonthNumber = today.getMonth();

        //this is the api data for the date of the venue
        const dayNumber = data.calendar.singleDates[0].date;

        //here the date string is split into the day number and the month number
        const dayNumberInstance = dayNumber.substring(8, 10);
        const monthNumberInstance = dayNumber.substring(5, 7);

        //eliminating all leading zeros
        const monthNumberNoZero = parseInt(monthNumberInstance, 10);

        //only show the event date if the day is equal to the devices date and time or ahead of it
        if (
            dayNumberInstance >= todayDateNumber &&
            thisMonthNumber == monthNumberNoZero
        ) {
            //api data for name of the event
            setEventName(data.location.label);

            //The date is being splitted to only show the date number of the event since this will be in the same month
            setDay(dayNumberInstance);
        } else if (monthNumberNoZero > thisMonthNumber) {
            //(YYYY/MM/DD)
            const fullDayNumber = dayNumber.substring(0, 10);

            //the name of the event that is upcoming
            setUpEventName(data.location.label);

            //the day, month and year of the upcoming event
            setUpDay(fullDayNumber);
        }
    }, [data]);

    return (
        <>
            <div>
                <h1 className="p-4 font-bold text-center">Events & Agenda</h1>
                {<AgendaInfo date={day} event={eventName} />}

                {<UpcomingInfo upDate={upDay} upEvent={upEventName} />}
            </div>
        </>
    );
};

export default Agenda;
>>>>>>> 2a7d0ff586acbf792f084dde8ff425b34dc0f8fb
