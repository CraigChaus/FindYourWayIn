import SideBar from '../global/Sidebar';
import UserDropdown from '../global/user/Dropdown';
import LocationData from './LocationData';

const DiscoveryComponent = () => {
    return (
        <div className=" h-screen  absolute w-full  text-gray-900 bg-cover bg-no-repeat bg-center bg-[url('../public/images/imageWalstraat.jpg')]  ">
            {/*// this block I took from  component MapNavbar,*/}
            <div className="z-10 flex flex-col w-full bg-transparent">
                <div
                    id="header"
                    className="z-10 flex items-center justify-between bg-green-500 h-18"
                >
                    <SideBar />
                    <div className="flex justify-end">
                        <UserDropdown />
                    </div>
                </div>
            </div>
            {/*//*/}

            <div className="px-5">
                <div className="flex   flex-raw border-white border-b-4 h-20 w-full ">
                    <div className=" flex  justify-center  h-full w-1/2 p-3">
                        <button className="flex justify-center w-full h-15 mx-2 rounded hover:bg-zinc-300 pt-5 font-bold text-white">
                            Suggestions
                        </button>
                    </div>
                    <div className="flex justify-center   h-full w-1/2 p-3">
                        <button className="flex justify-center w-full h-15 mx-2 rounded hover:bg-zinc-300 pt-5 font-bold text-white ">
                            Favorite
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-10  font-bold text-white justify-center pt-3">
                <h1>SHOPS</h1>
            </div>

            <div className="flex  flex-raw  h-1/5 w-full">
                <LocationData />
                <LocationData />

                <LocationData />
            </div>

            <div className=" flex flex-col justify-center border-orange-700 flex    h-1/3 w-full  ">
                <div className="  flex justify-center h-1/5 pt-5">
                    <h1 className="   font-bold  text-white">Name BIG</h1>
                </div>
                <div className="flex justify-center h-4/5 p-5">
                    <div className="   bg-cyan-300 flex justify-center w-full h-full rounded-3xl mx-20"></div>
                </div>
            </div>
        </div>
    );
};

export default DiscoveryComponent;
