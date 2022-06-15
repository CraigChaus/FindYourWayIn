
const LocationComponent= (props: any) => {
    const locationRes = props.locationRes;
    const title=props.title;




    return(<>
        {locationRes.map((location: any, index: number) => (
        <div key={index + 1} className="  flex-col w-full border-2">
            <div className="  w-full h-10 text-black"><p>{location.title}</p></div>
            </div>
            ))}
    </> );

};
export default LocationComponent;