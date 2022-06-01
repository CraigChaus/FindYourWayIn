import UserLocationMarker from "@components/GoogleMaps/userLocationMarker";
import LocationMarker from "@components/homepage/LocationMarker";
import { DirectionsRenderer, Marker } from "@react-google-maps/api";
import React from "react";
import GoogleAutocomplete from "../GoogleMaps/GoogleAutocomplete";
import GoogleMap from "../GoogleMaps/GoogleMap";

type LatLngLiteral = google.maps.LatLngLiteral;

const HomePage = () => {
    const [ mounted, setMounted ] = React.useState(false);
    // Default value set to Deventer in the case that geolocation doesnt work
    const [ lat, setLat ] = React.useState(52.2661);
    const [ lng, setLng ] = React.useState(6.1552);
    const [ zoom, setZoom ] = React.useState(12);   
    
    const endpoint : LatLngLiteral = {lat: 52.252619, lng: 6.163348};

    
    // Reverse geocode marker position
    const geocoder = new google.maps.Geocoder;
    const [ country, setCountry ] = React.useState< string >();
    const [ city, setCity ] = React.useState< string >();
    const [ sector, setSector ] = React.useState< string >();
    const [ neighborhood, setNeighborhood ] = React.useState< string >();
    const [ address, setAddress ] = React.useState< string >('');

    const [isLocation, setIsLocation] = React.useState(false);
    const [directions, setDirections] = React.useState<google.maps.DirectionsResult>();

    const fetchDirections = (start: LatLngLiteral, end: LatLngLiteral) => {

    
        const service = new google.maps.DirectionsService();
        service.route(
          {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING,
          },
          (result, status) => {
            if (status === "OK" && result) {
              setDirections(result);
            }
          }
        );
      };

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

    return(
        <div className="absolute w-full h-full mt-20">
            <GoogleAutocomplete
                setLat={setLat}
                setLng={setLng}
                setAddress={setAddress}
            />
            
            <GoogleMap 
                center={{lat, lng}}
                zoom={zoom}
                setZoom={setZoom}
                style={{width: '100%', height: '100%'}}
                disableDefaultUI
                clickableIcons={false}
                mapId="9c7cb3e171b411ff"
            >   

                <DirectionsRenderer
                    directions={directions}
                    options={{
                    polylineOptions: {
                        zIndex: 50,
                        strokeColor: "#1976D2",
                        strokeWeight: 5,
                    },
                    }}
                />
                <UserLocationMarker
                    position={{lat, lng}}
                    draggable
                    setLat={setLat}
                    setLng={setLng}
                    setAddress={setAddress}
                />

                <Marker 
                position={endpoint}
                onClick={()=>{
                    fetchDirections({lat, lng}, endpoint);
                }}
                >

                </Marker>
            </GoogleMap>

            <LocationMarker isLocation={isLocation} setIsLocation={handleSetLocation} />
        </div>
    );
};
export default HomePage;