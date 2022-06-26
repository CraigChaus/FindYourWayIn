import React from 'react';
import DayInfo from '@components/eventsDetails/DayInfo';
import EventImage from '@components/eventsDetails/EventImage';
import EventInfo from '@components/eventsDetails/EventInfo';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DefaultNavbar from '../../components/global/DefaultNavbar';
import { useTranslation } from 'react-i18next';

export async function getStaticPaths({ locales }: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_FEEDFACTORY_API_KEY}`,
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, {
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
            ...(await serverSideTranslations(context.locale, ['common'])),
        },
    };
}

export const Events = ({ data }: any): JSX.Element => {
    //This is for the day number of the event
    const [dayOfEvent, setDayOfEvent] = React.useState(null);
    const [monthOfEvent, setMontOfEvent] = React.useState(null);
    const [yearOfEvent, setYearOfEvent] = React.useState(null);
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
    const [eventWebSite, setWebsite] = React.useState(null);
    const { t } = useTranslation('common');

    React.useEffect(() => {
        if (data.files[0]?.hlink) {
            setEventImage(data?.files[0]?.hlink);
        }
        //this is for setting up the day
        const date = data.calendar.singleDates[0].date;
        //here the date string is split into the day number and the month number
        const dayNumber = date.substring(8, 10);
        const monthNumber = date.substring(5, 7);
        const yearNumber = date.substring(0, 4);
        setDayOfEvent(dayNumber);
        setMontOfEvent(monthNumber);
        setYearOfEvent(yearNumber);
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
        setWebsite(data.contactinfo.urls[0]?.url);
    }, [data]);

    return (
        <>
            <Head>
                <title>{eventName}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <DefaultNavbar />

            <div className="w-full">
                <div className="m-4 ">
                    <EventImage idImageSrc={eventImage} />
                </div>
            </div>

            <div className="w-full h-full mt-4">
                <div className="px-4 text-3xl font-black text-left">
                    <h1>{eventName}</h1>
                </div>
                <div>
                    <DayInfo
                        eventday={dayOfEvent}
                        eventMonth={monthOfEvent}
                        eventYear={yearOfEvent}
                        timeStart={eventStartTime}
                        timeEnd={eventendTime}
                        housenr={eventHouseNumVenue}
                        street={eventStreetVenue}
                        city={eventCityVenue}
                        zipcode={eventZipCodeVenue}
                    />
                </div>
            </div>

            <div className="px-4">
                <h1 className="text-2xl font-bold">{t('desc')}</h1>
                <EventInfo
                    description={eventDescription}
                    website={eventWebSite}
                />
            </div>
        </>
    );
};
export default Events;
