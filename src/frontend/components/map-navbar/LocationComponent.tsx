
const LocationComponent= (props: any) => {
    const locationRes = props.locationRes;
    const title=props.title;




    return(<>
        {locationRes.map((location: any, index: number) => (
        <div key={index + 1} className=" z-20 flex-col">
            <div className=" z-20 w-40 h-10 text-black"><p>{location.title}</p></div>
            </div>
            ))}
    </> );

};
export default LocationComponent;