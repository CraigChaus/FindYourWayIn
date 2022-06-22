import React from 'react';
import { useTranslation } from 'react-i18next';

export const Schedule = (props: any) => {
    const { t } = useTranslation('common');
    const { calendar: calendarProp } = props;
    const [schedule, setSchedule] = React.useState<any[]>([]);
    const [calendar, setCalendar] = React.useState(calendarProp ?? []);

    React.useEffect(() => {
        setCalendar(calendarProp);
    }, [calendarProp]);

    React.useEffect(() => {
        const result = [];
        for (let i = 0; i < calendar.length; i++) {
            switch (calendar[i].day) {
                case 1:
                    result.push({
                        date: t('sunday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
                case 2:
                    result.push({
                        date: t('monday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
                case 3:
                    result.push({
                        date: t('tuesday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
                case 4:
                    result.push({
                        date: t('wednesday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
                case 5:
                    result.push({
                        date: t('thursday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
                case 6:
                    result.push({
                        date: t('friday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
                case 7:
                    result.push({
                        date: t('saturday'),
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend,
                        },
                    });
                    break;
            }
        }
        setSchedule(result);
    }, [calendar]);

    return (
        <>
            <div className="w-full p-2 text-center table-auto">
                <table className="w-full h-auto text-sm border-1 border-black">
                    <thead>
                        <tr className=' text-lg'>
                            <th className='border-1 border-gray-400 bg-gray-200 p-2'>{t('day')}</th>
                            <th className='border-1 border-gray-400 bg-gray-200 p-2'>{t('Opening hours')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.length > 0 &&
                            schedule.map((day, index) => {
                                return (
                                    <tr
                                         key={index}>
                                        <td className='border-1 border-gray-400 bg-gray-100 w-1/2 p-2'>{day.date}</td>
                                        <td className='border-1 border-gray-400 bg-gray-100 w-1/2 p-2'>
                                            {day.time.start} - {day.time.end}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Schedule;
