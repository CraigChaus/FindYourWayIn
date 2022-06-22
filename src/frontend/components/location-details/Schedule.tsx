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
            <div id="schedule" className="w-full">
                <h2 className="font-bold text-center underline underline-offset-8">
                    {t('schedule')}
                </h2>
                <table className="w-full h-auto ml-2 text-sm text-center table-auto">
                    <thead>
                        <tr>
                            <th>{t('day')}</th>
                            <th>{t('time')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.length > 0 &&
                            schedule.map((day, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{day.date}</td>
                                        <td>
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
