import UserLocationMarker from '@components/GoogleMaps/userLocationMarker';
import LocationMarker from '@components/homepage/LocationMarker';
import Navbar from '@components/map-navbar/MapNavbar';
import React from 'react';
import GoogleAutocomplete from '../GoogleMaps/GoogleAutocomplete';
import GoogleMap from '../GoogleMaps/GoogleMap';
import { useRouter } from 'next/router';
import BottomSlider from '@components/global/bottom-slider/BottomSlider';

const HomePage = ({ locations }: any): JSX.Element => {
    const { query } = useRouter();
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
    const [bottomSlider, setBottomSlider] = React.useState<any>(null);
    // const [openBottomSlider, setOpenBottomSlider] = React.useState(false);

    // const [sliderState, dispatchSliderState] = React.useReducer(sliderReducer, false);

    // function sliderReducer(state: boolean, action: any) {
    //     switch (action.type) {
    //         case 'open':
    //             state = true;
    //             break;
    //         case 'close':
    //             state = false;
    //             break;
    //         default:
    //             state = false;
    //     }
    //     return state
    // }

    function handleSetLocation() {
        setIsLocation(!isLocation);
    }

    // const bottomSliderRef = React.useRef(null);

    React.useEffect(() => {
        if (query.id) {
            for (const location of locations) {
                if (location.id === query.id) {
                    setBottomSlider(location);
                    console.log(bottomSlider);
                    // setOpenBottomSlider(true);
                }
            }
        }
    }, [locations, query]);

    console.log('bottomSliderRef', bottomSlider);

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
                    // setZoom={setZoom}
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

                {bottomSlider && (
                    <BottomSlider
                        id={bottomSlider?.id}
                        header={bottomSlider?.location?.label}
                        description={
                            bottomSlider.trcItemDetails[0]?.shortdescription
                        }
                        image={
                            bottomSlider.files[0]?.hlink !== undefined
                                ? bottomSlider.files[0]?.hlink
                                : ''
                        }
                        handleCloseBottomSlider={() => setBottomSlider(null)}
                    />
                )}
            </div>
        </>
    );
};
export default HomePage;
