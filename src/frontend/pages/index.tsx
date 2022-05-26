import LocationMarker from "@components/LocationMarker";
import React from "react";
import GoogleAutocomplete from "../components/GoogleMaps/GoogleAutocomplete";
import GoogleMap from "../components/GoogleMaps/GoogleMap";
import GoogleMarker from "../components/GoogleMaps/GoogleMarker";

const HomePage = () => {
    const [ mounted, setMounted ] = React.useState(false);
    // Default value set to Deventer in the case that geolocation doesnt work
    const [ lat, setLat ] = React.useState(52.2661);
    const [ lng, setLng ] = React.useState(6.1552);
    const [ zoom, setZoom ] = React.useState(12);   

    // Reverse geocode marker position
    const geocoder = new google.maps.Geocoder;
    const [ country, setCountry ] = React.useState< string >();
    const [ city, setCity ] = React.useState< string >();
    const [ sector, setSector ] = React.useState< string >();
    const [ neighborhood, setNeighborhood ] = React.useState< string >();
    const [ address, setAddress ] = React.useState< string >('');

    const [isLocation, setIsLocation] = React.useState(false);

    function handleSetLocation() {
        setIsLocation(!isLocation);
    }

        React.useEffect(() => {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const position = pos.coords;
                        if(position){
                            setLat(position.latitude);
                            setLng(position.longitude);
                        }
                    }
                );
            };
            setMounted(true);
        }, [isLocation]);

    React.useEffect(() => {
        if(!mounted) return;
        geocoder
            .geocode({ location: {lat, lng}})
            .then(res => {
                if(res.results[0]){
                    res.results[0].address_components.reverse().filter((object) => {
                        object.types.filter((type) => {
                            if(type === 'country') setCountry(object.long_name);
                            if(type === 'locality') setCity(object.long_name);
                            if(type === 'sublocality_level_1') setSector(object.long_name);
                            if(type === 'route') setAddress(s=>s+object.long_name);
                            if(type === 'street_number') setAddress(s=>s+' '+object.long_name);
                        });
                    })
                }
                res.results.map(object => {
                    object.types.filter(type => {
                        if(type === 'neighborhood') setNeighborhood(object.formatted_address.split(',')[0]);
                    });
                });
            });
    }, [lat]);

    console.log(`
        Country: ${country}\n
        City: ${city}\n
        Address: ${address}
    `);

    console.log("WWWWWWWWWWWWW")
    // useEffect (()=>{
    async function getAllLocations() {
        const response = await fetch("https://app.thefeedfactory.nl/api/locations", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer 0eebe5c7-cf95-4519-899b-59e1a78768c1`
                },
            }
        )
       // const locations = await response.json();
        // return locations;
        if (response.ok) {
            const locations = await response.json();

            return locations;
        } else {
            throw new Error(await response.text());
        }
    }

    getAllLocations().then(locations =>{
        locations;
        console.log(locations);
        });
    console.log("FFFF")

    // async function fetchMoviesJSON() {
    //     const response = await fetch('/movies');
    //     const movies = await response.json();
    //     return movies;
    // }
    // fetchMoviesJSON().then(movies => {
    //     movies; // fetched movies
    // });

    return(
        <div>
            <GoogleAutocomplete
                setLat={setLat}
                setLng={setLng}
                setAddress={setAddress}
            />
            <input
                disabled
                value={address}
                style={{
                    margin: '20px 0 20px 0',
                    width: '100%'
                }}
            />
            <GoogleMap 
                center={{lat, lng}}
                zoom={zoom}
                setZoom={setZoom}
                style={{width: '100%', height: '500px'}}
                disableDefaultUI
                clickableIcons={false}
                mapId="9c7cb3e171b411ff"
            >
                <GoogleMarker
                    position={{lat, lng}}
                    draggable
                    setLat={setLat}
                    setLng={setLng}
                    setAddress={setAddress}
                />
            </GoogleMap>

            {/* TODO: Ask for help on this part cause it only works once */}

            {/* This is for the button that enables the user to focus the map back to their current position */}

            <LocationMarker isLocation={isLocation} setIsLocation={handleSetLocation} />

            <section style={{
                margin: '20px 0 20px 0'
            }}>
                <h1>Display reverse geocoding data</h1>
                <ul>
                    <li>Country: {country}</li>
                    <li>City: {city}</li>
                    <li>Area: {sector}</li>
                    <li>Neighborhood: {neighborhood}</li>
                    <li>Address: {address}</li>
                </ul>
            </section>
        </div>
    );
};
export default HomePage;