import React from 'react';
import FavouriteLocation from './Favouritelocation';

const Tabs = ({ color, locations }: any): JSX.Element => {
    console.log('locations in tab component', locations);

    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div className="flex flex-col flex-wrap w-full scrollbar-hide">
                <ul className="flex z-10 flex-row pt-2 px-6 w-full">
                    <li className=" -mb-px mr-2 w-1/2 last:mr-0 flex-auto text-center ">
                        <a
                            className={
                                'text-l text-black uppercase px-4 py-3 shadow-lg block leading-normal ' +
                                (openTab === 1
                                    ? 'text-white font-bold border-b-2 border-black'
                                    : 'font-light')
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            Places
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 w-1/2 flex-auto text-center">
                        <a
                            className={
                                'text-l text-black uppercase px-4 py-3 shadow-lg block leading-normal ' +
                                (openTab === 2
                                    ? 'text-white font-bold border-b-2 border-black'
                                    : 'font-light')
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            Events
                        </a>
                    </li>
                </ul>
                <div className="relative  flex flex-col min-w-0 break-words w-full my-4 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div
                                className={openTab === 1 ? 'block' : 'hidden'}
                                id="link1"
                            >
                                <div className="flex flex-col w-full overflow-auto scrollbar-hide relative bottom-5">
                                    {locations &&
                                        locations.map(
                                            (location: any, index: number) => {
                                                return (
                                                    <FavouriteLocation
                                                        key={index}
                                                        location={location}
                                                    />
                                                );
                                            },
                                        )}
                                </div>
                            </div>
                            <div
                                className={openTab === 2 ? 'block' : 'hidden'}
                                id="link2"
                            >
                                <p>To be implemented</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TabSwitch({ locations }: any) {
    return <Tabs color="green" locations={locations}></Tabs>;
}
