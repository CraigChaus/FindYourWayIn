
const LocationComponent= (props: any) => {
    const locationRes = props.locationRes;
    //const title=props.title;




    return(<>
        {locationRes.map((location: any, index: number) => (
        <div key={index + 1} className="  flex-col w-full border-1 pl-1">
            <div className="  w-full h-6 text-green-900"><p> {location.title}</p></div>
            <div className="  w-full h-5 text-black text-sm"><p>  {location.street} {location.houseNumber}, {location.city} {location.country}. {location.zipcode}</p></div>
            </div>
            ))}
    </> );

};
export default LocationComponent;