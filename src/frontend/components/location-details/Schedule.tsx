import React from "react";

let idPlace = "6280f61e8b779766af33c4bd"

export const Schedule = (props: any) => {
    const { calendar: calendarProp }  = props;
    const [schedule, setSchedule] = React.useState<any[]>([]);
    const [calendar, setCalendar] = React.useState(calendarProp ?? []);

    React.useEffect(() => {
        setCalendar(calendarProp);
    }, [calendarProp])

    React.useEffect(() => {
        const result = [];
        for (let i = 0; i < calendar.length; i++) {
            switch (calendar[i].day) {
                case 1:
                    result.push({
                        date: 'Sunday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
                case 2:
                    result.push({
                        date: 'Monday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
                case 3:
                    result.push({
                        date: 'Tuesday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
                case 4:
                    result.push({
                        date: 'Wednesday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
                case 5: 
                    result.push({
                        date: 'Thursday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
                case 6:
                    result.push({
                        date: 'Friday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
                case 7:
                    result.push({
                        date: 'Saturday',
                        time: {
                            start: calendar[i].whens[0].timestart,
                            end: calendar[i].whens[0].timeend
                        }
                    }); 
                    break;
            }
        }    
        setSchedule(result);
    }, [calendar])

    console.log(schedule);
      
    return (
        <>
            <table className="w-full h-auto ml-2 text-sm text-center table-auto">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    { schedule.length > 0 && (
                            <tr>
                                <td>{schedule[0].date}</td>
                                <td>{schedule[0].time.start} - {schedule[0].time.end}</td>
                            </tr>
                        )
                    }       
                </tbody>
            </table>
        </>
    )
}

export default Schedule;