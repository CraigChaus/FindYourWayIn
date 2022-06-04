import AgendaInfo from '@components/events/AgendaInfo';
import { UpcomingInfo } from '@components/events/UpcomingInfo';
import { deleteApp } from 'firebase/app';
import React from 'react'

export async function getStaticPaths() {
    const res = await fetch('https://app.thefeedfactory.nl/api/events', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1'
        },
      });
    const data = await res.json();
    const dataArray = data.results
    const paths = dataArray.map((event: any) => {
      return {
        params: { id: event.id }
      }
    });
  
    return {
      paths, fallback: false
    };
  }
  
  export async function getStaticProps(context: { params: { id: string } }) {
    const id =context.params.id;
    const res = await fetch(`https://app.thefeedfactory.nl/api/events/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1'
        },
      });  
    const data = await res.json();
  
    return {
      props: {
        data: data
      }
    };
  }

  export const Agenda = ({ data }: any): JSX.Element => {

    //creating an instance of the event name and day as usestates (FOR CURRENT EVENTS)
    const [eventName, setEventName] = React.useState(null);
    const [day, setDay] = React.useState(null);

    //creating an instance of the event name and day as usestates (FOR UPCOMING EVENTS)
    const [upEventName, setUpEventName] = React.useState(null);
    const [upDay, setUpDay] = React.useState(null);

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
      const dayNumberInstance = dayNumber.substring(8,10);
      const monthNumberInstance = dayNumber.substring(5,7);

      //eliminating all leading zeros
      const monthNumberNoZero = parseInt(monthNumberInstance,10);

      //only show the event date if the day is equal to the devices date and time or ahead of it
      if (dayNumberInstance >= todayDateNumber && thisMonthNumber == monthNumberNoZero ) {

      //api data for name of the event
      setEventName(data.location.label);

      //The date is being splitted to only show the date number of the event since this will be in the same month
      setDay(dayNumberInstance);

      }else if(monthNumberNoZero > thisMonthNumber){

        //(YYYY/MM/DD)
        const fullDayNumber = dayNumber.substring(0,10)

        //the name of the event that is upcoming
          setUpEventName(data.location.label);

        //the day, month and year of the upcoming event 
          setUpDay(fullDayNumber);
      }
  }, [data]);

  return (
      <>
        <div>
            <h1 className='font-bold text-center p-4'>Events & Agenda</h1>
            {<AgendaInfo date = {day} event = {eventName}/>}

            {<UpcomingInfo upDate = {upDay} upEvent = {upEventName}/>}
        </div>
    </>
  )
}

export default Agenda;
