

const ProfilePage = (props: any) => {
     const user = props.user;

    const categories = props.categories;
    return (
        <div className=" h-screen bg-cover bg-landing-page absolute w-full  text-gray-900 bg-cover bg-no-repeat ">

            <div className="h-2/3 max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 shadow-md">

                <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-80 mx-6 lg:mx-0">


                    <div className="p-4 md:p-12 text-center lg:text-left">

                        <div  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url('../public/images/profileCat.png')]" ></div>
                        <div className="flex items-center justify-between">
                            <p className=" text-2xl font-semibold  text-gray-400 ">Username: </p>

                        </div>
                        <div className="  w-full  bg-white rounded shadow-lg ml-3 ">
                            <p className="text-2xl p-5 font-bold  lg:pt-0">{user.email}</p>
                        </div>



                        <div className="pt-12 pb-8">
                            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                My preferences
                            </button>
                        </div>


                    </div>

                </div>


                <div className="w-full   h-full lg:w-2/5">
                    <div  className="  bg-cover bg-no-repeat h-1/2 mt-40 hidden  rounded-none lg:rounded-lg shadow-2xl lg:block bg-[url('../public/images/profileCat.png')]"></div>

                </div>

                <div className="absolute top-0 right-0 h-12 w-18 p-4">
                    <button className="js-change-theme focus:outline-none">🌙</button>
                </div>

            </div>
        </div>

    );
};

export default ProfilePage;