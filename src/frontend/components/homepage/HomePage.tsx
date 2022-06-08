import UserLocationMarker from '@components/GoogleMaps/userLocationMarker';
import LocationMarker from '@components/homepage/LocationMarker';
import Navbar from '@components/map-navbar/MapNavbar';
import React from 'react';
import GoogleAutocomplete from '../GoogleMaps/GoogleAutocomplete';
import GoogleMap from '../GoogleMaps/GoogleMap';

const HomePage = ({ locations }: any): JSX.Element => {
    const [mounted, setMounted] = React.useState(false);
    // Default value set to Deventer in the case that geolocation doesnt work
    const [lat, setLat] = React.useState(52.2661);
    const [lng, setLng] = React.useState(6.1552);
    const [zoom, setZoom] = React.useState(20);

    // Reverse geocode marker position
    const geocoder = new google.maps.Geocoder();
    const [country, setCountry] = React.useState<string>();
    const [city, setCity] = React.useState<string>();
    const [sector, setSector] = React.useState<string>();
    const [neighborhood, setNeighborhood] = React.useState<string>();
    const [address, setAddress] = React.useState<string>('');

    const [isLocation, setIsLocation] = React.useState(false);

    function handleSetLocation() {
        setIsLocation(!isLocation);
    }

    React.useEffect(() => {
        if (!mounted) return;
        geocoder.geocode({ location: { lat, lng } }).then((res) => {
            if (res.results[0]) {
                res.results[0].address_components.reverse().filter((object) => {
                    object.types.filter((type) => {
                        if (type === 'country') setCountry(object.long_name);
                        if (type === 'locality') setCity(object.long_name);
                        if (type === 'sublocality_level_1')
                            setSector(object.long_name);
                        if (type === 'route')
                            setAddress((s) => s + object.long_name);
                        if (type === 'street_number')
                            setAddress((s) => s + ' ' + object.long_name);
                    });
                });
            }
            res.results.map((object) => {
                object.types.filter((type) => {
                    if (type === 'neighborhood')
                        setNeighborhood(object.formatted_address.split(',')[0]);
                });
            });
        });
    }, [lat]);

    // console.log(`
    //     Country: ${country}\n
    //     City: ${city}\n
    //     Address: ${address}
    // `);

    return (
        <>
            <Navbar />
            <div className="absolute w-full h-full">

                <GoogleAutocomplete
                    setLat={setLat}
                    setLng={setLng}
                    setAddress={setAddress}
                />

                <GoogleMap
                    center={{ lat, lng }}
                    zoom={zoom}
                    setZoom={setZoom}
                    style={{ width: '100%', height: '100%' }}
                    disableDefaultUI
                    clickableIcons={false}
                    mapId="9c7cb3e171b411ff"
                    gestureHandling={'cooperative'} 
                    locations={locations}
                >
                    <UserLocationMarker
                        position={{ lat, lng }}
                        setLat={setLat}
                        setLng={setLng}
                        setAddress={setAddress}
                    />
                </GoogleMap>

                <LocationMarker
                    isLocation={isLocation}
                    setIsLocation={handleSetLocation}
                />
            </div>
        </>
    );
};
export default HomePage;
