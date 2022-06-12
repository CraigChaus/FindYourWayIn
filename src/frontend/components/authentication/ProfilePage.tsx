import SideBar from '../global/Sidebar';
import UserDropdown from '../global/user/Dropdown';
import Footer from '@components/global/Footer';

const ProfilePage = (props: any) => {
    const user = props.user;

    const categories = props.categories;
    return (
        <div className=" h-screen bg-cover  absolute w-full bg-center  overflow-y-scroll bg-[url('../public/images/image2.jpg')]">
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

            <div className="h-2/3 max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto mt-28 lg:my-0 shadow-lg">
                <div
                    id="profile"
                    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none drop-shadow-xl bg-white opacity-90 mx-6 lg:mx-0"
                >
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        <div className="block lg:hidden   rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url('../public/images/profileCat.png')]"></div>

                        <div className="flex justify-center  border-b-2 mb-3 mt-3 mx-4 pb-2">
                            <p className=" text-2xl font-bold  text-black ">
                                My profile:
                            </p>
                        </div>

                        <div className="flex justify-start   mb-1">
                            <p className=" text-md   text-gray-500 ">
                                Username:{' '}
                            </p>
                        </div>
                        <div className="  flex justify-start  bg-white rounded shadow-lg  ">
                            <p className="text-md  font-bold  ">{user.email}</p>
                        </div>

                        <div className="pt-6 pb-6">
                            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                My preferences
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full   h-full lg:w-2/5">
                    <div className="  bg-cover bg-no-repeat h-80 mt-28 hidden  rounded-none lg:rounded-lg shadow-2xl lg:block bg-[url('../public/images/profileCat.png')]"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
