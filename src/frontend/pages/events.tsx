import AgendaInfo from '@components/events/AgendaInfo';
import { UpcomingInfo } from '@components/events/UpcomingInfo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type EventProp = {
    id: any;
    eventName: any;
    day: any;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export async function getStaticProps() {
    const res = await fetch(`${apiUrl}/events`, {
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
}

export const Agenda = ({ data }: any): JSX.Element => {
    const router = useRouter();
    //creating an instance of the event name and day as usestates (FOR CURRENT EVENTS)
    const [currentEvents, setCurrentEvents] = React.useState<
        EventProp[] | null
    >(null);

    //creating an instance of the event name and day as usestates (FOR UPCOMING EVENTS)
    const [upComingEvents, setUpComingEvents] = React.useState<
        EventProp[] | null
    >(null);

    React.useEffect(() => {
        const resultCurrent = [];
        const resultUpcoming = [];

        //this is the instance of the devices current date and time
        const today = new Date();

        //here the date string is split into the day number and the month number
        const todayDateNumber = today.getDate();
        const thisMonthNumber = today.getMonth();

        for (let i = 0; i < data.results.length; i++) {
            //this is the api data for the date of the event
            const dayNumber = data.results[i].calendar.singleDates[0]?.date;

            //here the date string is split into the day number and the month number
            let dayNumberInstance = 0;
            let monthNumberInstance = '';
            if (dayNumber) {
                dayNumberInstance = parseInt(dayNumber.substring(8, 10));
                monthNumberInstance = dayNumber.substring(5, 7);
            }

            //eliminating all leading zeros
            const monthNumberNoZero = parseInt(monthNumberInstance, 10);

            // console.log(dayNumberInstance);

            // console.log(monthNumberInstance);

            // console.log(monthNumberNoZero);

            //only show the event date if the day is equal to the devices date and time or ahead of it
            if (
                dayNumberInstance >= todayDateNumber &&
                thisMonthNumber == monthNumberNoZero
            ) {
                resultCurrent.push({
                    id: data.results[i].id,
                    eventName: data.results[i].trcItemDetails[0].title,
                    day: dayNumberInstance,
                });

                // console.log(resultCurrent)   

                // //api data for name of the event
                // setEventName(data.results[i].location.label);

                // //The date is being splitted to only show the date number of the event since this will be in the same month
                // setDay(dayNumberInstance);
            } else if (monthNumberNoZero > thisMonthNumber) {
                //(YYYY/MM/DD)
                const fullDayNumber = dayNumber.substring(0, 10);

                resultUpcoming.push({
                    id: data.results[i].id,
                    eventName: data.results[i].trcItemDetails.title,
                    day: fullDayNumber,
                });

                // console.log(resultUpcoming);

                // //the name of the event that is upcoming
                // setUpEventName(data.results[i].location.label);

                // //the day, month and year of the upcoming event
                // setUpDay(fullDayNumber);
            }
        }
        setUpComingEvents(resultUpcoming);
        setCurrentEvents(resultCurrent);
    }, [data]);
    console.log(data);
    // console.log(upComingEvents);
    // console.log(currentEvents);

    return (
        <>
            <Head>
                <title>Events</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <div>
                    <h1 className="p-4 font-bold text-center">
                        Events & Agenda
                    </h1>

                    <h2 className="font-bold text-center">Current</h2>
                    {currentEvents &&
                        currentEvents.map((currentEvent, index) => {
                            console.log(currentEvent);
                            return (
                                <AgendaInfo
                                    onClick={() =>
                                        router.push(`events/${currentEvent.id}`)
                                    }
                                    key={index}
                                    date={currentEvent.day}
                                    event={currentEvent.eventName}
                                />
                            );
                        })}
                </div>

                <div>
                    <h2 className="font-bold text-center">Upcoming Events</h2>
                    {upComingEvents &&
                        upComingEvents.map((upcomingEvent, index) => {
                            return (
                                <UpcomingInfo
                                    onClick={() =>
                                        router.push(
                                            `events/${upcomingEvent.id}`,
                                        )
                                    }
                                    key={index}
                                    upDate={upcomingEvent.day}
                                    upEvent={upcomingEvent.eventName}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Agenda;
