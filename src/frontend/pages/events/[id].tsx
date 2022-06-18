import React from 'react';
import DayInfo from '@components/eventsDetails/DayInfo';
import EventImage from '@components/eventsDetails/EventImage';
import EventInfo from '@components/eventsDetails/EventInfo';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY;

export async function getStaticPaths({ locales }: any) {
    const res = await fetch(`${apiUrl}/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
    });
    const data = await res.json();
    const dataArray = data.results;
    const paths = dataArray.flatMap((location: any) => {
        return locales.map((locale: any) => {
            return {
                params: { id: location.id },
                locale: locale,
            };
        });
    });

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(context: {
    params: { id: string };
    locale: string;
}) {
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
            ...(await serverSideTranslations(context.locale, ['common'])),
        },
    };
}

export const Events = ({ data }: any): JSX.Element => {
    //These are for the image of the event
    // const [imgSrc, setImgSrc] = React.useState(null);
    // const [imgAlt, setImgAlt] = React.useState<any>(null);

    //TODO: uncomment code line above me

    //This is for the day number of the event
    const [dayOfEvent, setDayOfEvent] = React.useState(null);

    //This is for the event name, time, venue, ticket info and website

    const [eventName, setEventName] = React.useState(null);
    const [eventStartTime, setEventStartTime] = React.useState(null);
    const [eventendTime, setEventEndTime] = React.useState(null);
    const [eventImage, setEventImage] = React.useState<any>('');

    //this is for the event description
    const [eventDescription, setEventDescription] = React.useState(null);

    //this is for the venue
    const [eventStreetVenue, setEventStreetVenue] = React.useState(null);
    const [eventHouseNumVenue, setEventHouseNumVenue] = React.useState(null);
    const [eventZipCodeVenue, setEventZipCodeVenue] = React.useState(null);
    const [eventCityVenue, setEventCityVenue] = React.useState(null);

    // const [ticket, setTicket] = React.useState(null);
    const [eventWebSite, setWebsite] = React.useState(null);

    React.useEffect(() => {
        if (data.files[0]?.hlink) {
            setEventImage(data?.files[0]?.hlink);
        }

        //this is for setting up the day
        const dayNumber = data.calendar.singleDates[0].date;

        //here the date string is split into the day number and the month number
        const dayNumberInstance = dayNumber.substring(8, 10);
        setDayOfEvent(dayNumberInstance);

        setEventName(data.trcItemDetails[0].title);

        if (data.calendar.singleDates[0]?.when[0]?.timestart) {
            setEventStartTime(data.calendar.singleDates[0]?.when[0].timestart);
        }

        if (data.calendar.singleDates[0]?.when[0]?.timeend) {
            setEventEndTime(data.calendar.singleDates[0]?.when[0].timeend);
        }

        setEventHouseNumVenue(data.location.address?.housenr);
        setEventStreetVenue(data.location.address?.street);
        setEventZipCodeVenue(data.location.address?.zipcode);
        setEventCityVenue(data.location.address?.city);

        setEventDescription(data.trcItemDetails[0]?.longdescription);

        //this is for the ticket info for the event
        // setTicket();

        setWebsite(data.contactinfo.urls[0]?.url);
    }, [data]);

    console.log(eventImage);

    return (
        <>
            <Head>
                <title>{eventName}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="m-4 text-2xl font-bold text-center">
                <h1>{eventName}</h1>
            </div>
            <div className="flex w-full h-full mt-8">
                <div className="p-4 m-4">
                    <DayInfo eventday={dayOfEvent} />
                </div>
                <div>
                    <EventImage idImageSrc={eventImage} />
                    <EventInfo
                        description={eventDescription}
                        timeStart={eventStartTime}
                        timeEnd={eventendTime}
                        housenr={eventHouseNumVenue}
                        street={eventStreetVenue}
                        city={eventCityVenue}
                        zipcode={eventZipCodeVenue}
                        website={eventWebSite}
                    />
                </div>
            </div>
        </>
    );
};
export default Events;
