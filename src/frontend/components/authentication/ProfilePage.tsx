import SideBar from '../global/Sidebar';
import UserDropdown from '../global/user/Dropdown';
import Footer from '@components/global/Footer';
import { useTranslation } from 'react-i18next';
import Navbar from '@components/global/DefaultNavbar';

const ProfilePage = (props: any) => {
    const user = props.user;
    const { t } = useTranslation('common');

    const categories = props.categories;
    return (
        <div className=" h-screen bg-cover  absolute w-full bg-center  overflow-y-scroll bg-[url('../public/images/image2.jpg')]">
            <Navbar />

            <div className="flex flex-wrap items-center h-auto max-w-4xl mx-auto shadow-lg lg:h-screen mt-28 lg:my-0">
                <div
                    id="profile"
                    className="w-full mx-6 bg-white rounded-lg lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none drop-shadow-xl opacity-90 lg:mx-0"
                >
                    <div className="p-4 text-center md:p-12 lg:text-left">
                        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url('../public/images/boringProfile.png')]"></div>

                        <div className="flex justify-center pb-2 mx-4 mt-3 mb-3 border-b-2">
                            <h2 className="text-2xl font-bold text-black ">
                                {t('myProfile')}
                            </h2>
                        </div>

                        <div
                            data-cy="profile-username"
                            className="flex justify-start mb-1"
                        >
                            <p className="text-gray-500 text-md">
                                {t('username')}
                            </p>
                        </div>
                        <div
                            data-cy="profile-email"
                            className="flex justify-start bg-white rounded shadow-lg "
                        >
                            <p className="font-bold text-md ">{user.email}</p>
                        </div>

                        <div data-cy="profile-button" className="pt-6 pb-6">
                            <button className="px-4 py-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900">
                                {t('preferences')}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    data-cy="profile-avatar"
                    className="w-full h-full lg:w-2/5"
                >
                    <div className="bg-cover bg-no-repeat h-80 mt-28 hidden  rounded-none lg:rounded-lg shadow-2xl lg:block bg-[url('../public/images/profileCat.png')]"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
