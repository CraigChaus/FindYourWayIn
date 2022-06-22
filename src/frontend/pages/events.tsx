import { Card } from '@components/events/Card';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import DefaultNavbar from '../components/global/DefaultNavbar';
import broken from '../public/images/broken.png';
import NoDataCard from '@components/events/NoDataCard';

type EventProp = {
    id: any;
    eventName: any;
    day: any;
    eventImage: any;
};

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export async function getStaticProps({ locale }: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
        },
    });
    const data = await res.json();

    return {
        props: {
            data: data,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export const Agenda = ({ data }: any): JSX.Element => {
    const router = useRouter();
    const { t } = useTranslation('common');
    //creating an instance of the event name and day as usestates (FOR CURRENT EVENTS)
    const [currentEvents, setCurrentEvents] = React.useState<
        EventProp[] | null
    >(null);

    //creating an instance of the event name and day as usestates (FOR UPCOMING EVENTS)
    const [upComingEvents, setUpComingEvents] = React.useState<
        EventProp[] | null
    >(null);

    const [toggleState, setToggleState] = React.useState(1);

    console.log(data);
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
                if (data.results[i]?.files[0]?.hlink == null) {
                    resultCurrent.push({
                        id: data.results[i].id,
                        eventName: data.results[i].trcItemDetails[0].title,
                        day: dayNumberInstance,
                        eventImage: broken,
                    });
                } else {
                    resultCurrent.push({
                        id: data.results[i].id,
                        eventName: data.results[i].trcItemDetails[0].title,
                        day: dayNumberInstance,
                        eventImage: data.results[i]?.files[0]?.hlink,
                    });
                }

                // console.log(resultCurrent)

                // //api data for name of the event
                // setEventName(data.results[i].location.label);

                // //The date is being splitted to only show the date number of the event since this will be in the same month
                // setDay(dayNumberInstance);
            } else if (monthNumberNoZero > thisMonthNumber) {
                //(YYYY/MM/DD)
                const fullDayNumber = dayNumber.substring(0, 10);

                if (data.results[i]?.files[0]?.hlink == null) {
                    resultUpcoming.push({
                        id: data.results[i].id,
                        eventName: data.results[i].trcItemDetails[0].title,
                        day: fullDayNumber,
                        eventImage: broken,
                    });
                } else {
                    resultUpcoming.push({
                        id: data.results[i].id,
                        eventName: data.results[i].trcItemDetails[0].title,
                        day: fullDayNumber,
                        eventImage: data.results[i]?.files[0]?.hlink,
                    });
                }
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

    const toggleTab = (tabIndex: any) => {
        setToggleState(tabIndex);
    };

    return (
        <>
            <Head>
                <title>Events</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <DefaultNavbar />

            <div>
                <h1 className="p-4 pt-20 text-4xl font-bold text-center">
                    Events
                </h1>
                <div className="px-5">
                    <div className="flex w-full border-b-4 border-white ">
                        <div className="flex justify-center w-1/2 h-full p-3 ">
                            <div
                                data-cy="toggleTab"
                                className={
                                    toggleState === 1
                                        ? ' flex justify-center w-full h-30 mx-2 rounded   font-bold text-white  bg-green-800'
                                        : 'flex justify-center w-full h-30 mx-2 rounded hover:bg-zinc-300  font-bold text-black'
                                }
                                onClick={() => toggleTab(1)}
                            >
                                This month
                            </div>
                        </div>
                        <div className="flex justify-center w-1/2 h-full p-3">
                            <div
                                data-cy="toggleTab"
                                className={
                                    toggleState === 2
                                        ? 'flex justify-center w-full h-15 mx-2 rounded  font-bold text-white  bg-green-800 '
                                        : 'flex justify-center w-full h-30 mx-2 rounded hover:bg-zinc-300  font-bold text-black'
                                }
                                onClick={() => toggleTab(2)}
                            >
                                Upcoming
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {currentEvents == null ? (
                    <div
                        className={
                            toggleState === 1 ? 'mt-8 overflow-y-auto' : ' h-0'
                        }
                    >
                        <NoDataCard />
                    </div>
                ) : (
                    <div
                        className={
                            toggleState === 1
                                ? 'mt-8 overflow-y-auto '
                                : ' h-0 '
                        }
                    >
                        {currentEvents &&
                            currentEvents.map((currentEvent, index) => {
                                return (
                                    <Card
                                        onClick={() =>
                                            router.push(
                                                `events/${currentEvent.id}`,
                                            )
                                        }
                                        key={index}
                                        date={currentEvent.day}
                                        event={currentEvent.eventName}
                                        imageSrc={currentEvent.eventImage}
                                    />
                                );
                            })}
                    </div>
                )}

                <div>
                    <div className={toggleState === 2 ? 'mt-8' : 'invisible'}>
                        {upComingEvents &&
                            upComingEvents.map((upcomingEvent, index) => {
                                return (
                                    <Card
                                        onClick={() =>
                                            router.push(
                                                `events/${upcomingEvent.id}`,
                                            )
                                        }
                                        key={index}
                                        date={upcomingEvent.day}
                                        event={upcomingEvent.eventName}
                                        imageSrc={upcomingEvent.eventImage}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Agenda;
