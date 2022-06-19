import React from 'react';
import LocationPinSVG from '../../public/icons/location_pin.svg';
import Clock from '../../public/icons/clock.svg';
import Calendar from '../../public/icons/calendar.svg';
import { useTranslation } from 'react-i18next';

export const DayInfo = ({
    eventday,
    eventMonth,
    eventYear,
    housenr,
    street,
    city,
    zipcode,
    timeStart,
    timeEnd,
}: any) => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className="flex justify-between p-2 mx-2 text-base">
                <div className="flex space-x-2">
                    <div>
                        <LocationPinSVG />
                    </div>
                    <label> {`${t('location_one')}`}:</label>

                    {street ? (
                        <p>
                            {street} , {housenr}, {zipcode}, {city}
                        </p>
                    ) : (
                        <p>
                            {t('inDesc')} , {zipcode}, {city}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex justify-between p-2 mx-2 mb-2 text-base">
                <div className="flex space-x-2">
                    <div>
                        <Calendar />
                    </div>
                    <div>
                        <p>{eventday + '/' + eventMonth + '/' + eventYear}</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <div>
                        <Clock />
                    </div>

                    {timeStart ? (
                        <p>
                            {timeStart} - {timeEnd}
                        </p>
                    ) : (
                        <p>{t('inDesc')}</p>
                    )}
                </div>
            </div>
        </>
    );
};
export default DayInfo;
