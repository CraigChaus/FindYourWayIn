import SideBar from '../global/Sidebar';
import UserDropdown from '../global/user/Dropdown';

const DiscoveryComponent = () => {

    return ( <div className=" h-screen  absolute w-full  text-gray-900 bg-cover bg-no-repeat bg-center bg-[url('../public/images/imageWalstraat.jpg')] ">
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


           <div className="flex   flex-raw border-4 border-blue h-20 w-full" >
               <div className=" flex  justify-center border-4 h-full w-1/2 p-3" >
                   <button className="flex justify-center w-full h-15 mx-2 rounded  pt-3 font-bold text-white">Suggestions</button>
               </div>
               <div className="flex justify-center  border-4 h-full w-1/2 p-3">
                   <button className="flex justify-center w-full h-15 mx-2 rounded hover:bg-zinc-300 pt-3 font-bold text-white ">Favorite</button></div>
           </div>

          <div className="flex w-full h-10 border-4 font-bold text-white justify-center pt-3"><h1>Shops</h1></div>

            <div className="flex  flex-raw border-2  h-1/5 w-full">

                <div className=" flex flex-col justify-center border-2 h-full w-1/3 p-2" >


                        <div className="flex justify-center h-4/5">
                            <div className=" border-4  bg-cyan-300 flex justify-center w-28 h-28 rounded-full  ">
                            </div>
                        </div>
                        <div className=" border-4 flex justify-center h-1/5">
                            <p className="text-white border-4 text-lg font-medium ">
                                Name
                            </p>
                        </div>
                </div>
                <div className=" flex flex-col justify-center border-2 h-full w-1/3 p-2" >


                    <div className="flex justify-center h-4/5">
                        <div className=" border-4  bg-cyan-300 flex justify-center w-28 h-28 rounded-full  ">

                        </div>
                    </div>
                    <div className=" border-4 flex justify-center h-1/5">
                        <p className="text-white border-4 text-lg font-medium ">
                            Name
                        </p>
                    </div>



                </div>

                <div className=" flex flex-col justify-center border-2 h-full w-1/3 p-2" >


                    <div className="flex justify-center h-4/5">
                        <div className=" border-4  bg-cyan-300 flex justify-center w-28 h-28 rounded-full  ">

                        </div>
                    </div>
                    <div className=" border-4 flex justify-center h-1/5">
                        <p className=" text-white border-4 text-lg font-medium ">
                            Name
                        </p>
                    </div>



                </div>



            </div>

            <div className=" flex flex-col justify-center border-orange-700 flex  border-4  h-1/3 w-full  ">
                <div className=" border-4 flex justify-center h-1/5 pt-3">
                    <h1 className=" border-4  font-bold  text-white">
                        Name
                    </h1>
                </div>
                    <div className="flex justify-center h-4/5 p-5">
                        <div className=" border-4  bg-cyan-300 flex justify-center w-full h-full rounded-3xl mx-20">

                        </div>
                    </div>



                  </div>


        </div>
    );
};

export default DiscoveryComponent;
