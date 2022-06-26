import React from 'react';
import FavouriteLocation from './Favouritelocation';

const Tabs = ({ locations }: any): JSX.Element => {
    console.log('locations in tab component', locations);

    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div className="flex flex-col flex-wrap w-full scrollbar-hide">
                <ul className="z-10 flex flex-row w-full px-6 pt-2">
                    <li className="flex-auto w-1/2 mr-2 -mb-px text-center  last:mr-0">
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
                    <li className="flex-auto w-1/2 mr-2 -mb-px text-center last:mr-0">
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
                <div className="relative flex flex-col w-full min-w-0 my-4 break-words rounded shadow-lg">
                    <div className="flex-auto px-4 py-5">
                        <div className="tab-content tab-space">
                            <div
                                className={openTab === 1 ? 'block' : 'hidden'}
                                id="link1"
                            >
                                <div className="relative flex flex-col w-full overflow-auto scrollbar-hide bottom-5">
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
