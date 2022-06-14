import UserLocationMarker from '@components/GoogleMaps/userLocationMarker';
// import LocationMarker from '@components/homepage/LocationMarker';
import Navbar from '@components/map-navbar/MapNavbar';
import React, { useContext } from 'react';
import GoogleAutocomplete from '../GoogleMaps/GoogleAutocomplete';
import GoogleMap from '../GoogleMaps/GoogleMap';
import Router, { useRouter } from 'next/router';
import BottomSlider from '@components/global/bottom-slider/BottomSlider';
import { ObjectMarker } from '@components/GoogleMaps/objectMarker';
import { filterByCategory } from 'API/api';
import { FilterContext } from 'contexts/FilterContext';

const HomePage = ({ locations }: any): JSX.Element => {
    const { query } = useRouter();
    const [mounted, setMounted] = React.useState(false);
    // Default value set to Deventer in the case that geolocation doesnt work
    const [lat, setLat] = React.useState(52.2661);
    const [lng, setLng] = React.useState(6.1552);
    const [zoom, setZoom] = React.useState(16);

    
    // Reverse geocode marker position
    const geocoder = new google.maps.Geocoder();
    const [country, setCountry] = React.useState<string>();
    const [city, setCity] = React.useState<string>();
    const [sector, setSector] = React.useState<string>();
    const [neighborhood, setNeighborhood] = React.useState<string>();
    const [address, setAddress] = React.useState<string>('');

    const [isLocation, setIsLocation] = React.useState(false);
    const [dataLocation, setDataLocation] = React.useState<any[]>([]);
    const [filteredLocations, setFilteredLocations] = React.useState<any[]>([]);

    // bottom slider state
    const [bottomSlider, setBottomSlider] = React.useState<any>(null);
    // const [markers, setMarkers] = React.useState<any[]>([]);

    const filterContext = useContext(FilterContext);

    // const onIdle = (m: google.maps.Map) => {
    //     console.log("onIdle");
    //     setZoom(m.getZoom()!);
    //     setCenter(m.getCenter()!.toJSON());
    // };

    function handleSetLocation() {
        setIsLocation(!isLocation);
    }

    // function clearMarkers() {
    //     for (let i = 0; i < markers.length; i++) {
    //         markers[i].setMap(null);
    //     }
    // }

    React.useEffect(() => {
        if (!mounted) return;
        geocoder.geocode({ location: { lat, lng } });
        // .then((res) => {
        //     if (res.results[0]) {
        //         res.results[0].address_components.reverse().filter((object) => {
        //             object.types.filter((type) => {
        //                 if (type === 'country') setCountry(object.long_name);
        //                 if (type === 'locality') setCity(object.long_name);
        //                 if (type === 'sublocality_level_1')
        //                     setSector(object.long_name);
        //                 if (type === 'route')
        //                     setAddress((s) => s + object.long_name);
        //                 if (type === 'street_number')
        //                     setAddress((s) => s + ' ' + object.long_name);
        //             });
        //         });
        //     }
        //     res.results.map((object) => {
        //         object.types.filter((type) => {
        //             if (type === 'neighborhood')
        //                 setNeighborhood(object.formatted_address.split(',')[0]);
        //         });
        //     });
        // });
    }, [geocoder, lat, lng, mounted]);

    // React.useEffect(() => {
    //     clearMarkers();

    //     if (filteredLocations.length) {
    //         const googleMarkers = [];

    //         for (let i = 0; i < filteredLocations.length; i++) {
    //             const marker = new google.maps.Marker({
    //                 position: {
    //                     lat: parseFloat(
    //                         dataLocation[i].location.address.gisCoordinates[0]
    //                             .xcoordinate,
    //                     ),
    //                     lng: parseFloat(
    //                         dataLocation[i].location.address.gisCoordinates[0]
    //                             .ycoordinate,
    //                     ),
    //                 },
    //             });
    //             googleMarkers.push(marker);
    //         }

    //         setMarkers(googleMarkers);
    //     }
    // }, [dataLocation, filteredLocations]);

    React.useEffect(() => {
        setDataLocation(locations);
        setFilteredLocations(
            filterByCategory(dataLocation, filterContext.filter),
        );
    }, [locations, dataLocation, filterContext.filter]);

    React.useEffect(() => {
        if (query.id) {
            for (const location of dataLocation) {
                if (location.id === query.id) {
                    setBottomSlider(location);
                }
            }
        }
    }, [dataLocation, query]);

    return (
        <>
            <div className="flex flex-col w-full h-full">
                <Navbar />
                {/* <GoogleAutocomplete
                    setLat={setLat}
                    setLng={setLng}
                    setAddress={setAddress}
                /> */}

                <GoogleMap
                    center={{ lat, lng }}
                    zoom={zoom}
                    // setZoom={setZoom}
                    style={{ width: '100%', height: '100%' }}
                    clickableIcons={false}
                    mapId="9c7cb3e171b411ff"
                    gestureHandling={'greedy'}
                    locations={locations}
                    // onIdle={onIdle}
                >
                    <UserLocationMarker
                        position={{ lat, lng }}
                        setLat={setLat}
                        setLng={setLng}
                        setAddress={setAddress}
                    />

                    {dataLocation &&
                        dataLocation.map((location: any) => {
                            return (
                                <ObjectMarker
                                    id={location.id}
                                    key={location.id}
                                    position={{
                                        lat: parseFloat(
                                            location.location.address
                                                .gisCoordinates[0].xcoordinate,
                                        ),
                                        lng: parseFloat(
                                            location.location.address
                                                .gisCoordinates[0].ycoordinate,
                                        ),
                                    }}
                                    clickable={true}
                                    category={
                                        location.trcItemCategories.types[0]
                                            .categoryTranslations[0].label
                                    }
                                />
                            );
                        })}
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
                            handleCloseBottomSlider={() => {
                                setBottomSlider(null);
                                Router.replace('/home', undefined, {
                                    shallow: true,
                                });
                            }}
                        />
                    )}
                </GoogleMap>

                {/* {bottomSlider && (
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
                )} */}
            </div>
        </>
    );
};
export default HomePage;
