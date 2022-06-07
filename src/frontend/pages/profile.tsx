import React from 'react';
import { useAuth } from 'contexts/AuthContext';
const Profile = (props: any) => {
    const { user } = useAuth();

    return (
    <body className=" block h-screen bg-cover bg-landing-page">

    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


            <div className="p-4 md:p-12 text-center lg:text-left">
                
                <div  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url('./prifileImgCat.png')]" ></div>

                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.email}</h1>

                <div className="pt-12 pb-8">
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                        My preferences
                    </button>
                </div>


            </div>

        </div>

      
        <div className="w-full lg:w-2/5">
            <img src="./prifileImgCat.png" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
            
        </div>

        <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button className="js-change-theme focus:outline-none">🌙</button>
        </div>

    </div>
    </body>
  
);
};

export default Profile;
