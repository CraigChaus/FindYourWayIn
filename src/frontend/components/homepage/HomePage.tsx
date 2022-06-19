import UserLocationMarker from '@components/GoogleMaps/userLocationMarker';
// import LocationMarker from '@components/homepage/LocationMarker';
import Navbar from '@components/map-navbar/MapNavbar';
import React, { useContext, useState } from 'react';
import GoogleAutocomplete from '../GoogleMaps/GoogleAutocomplete';
import GoogleMap from '../GoogleMaps/GoogleMap';
import Router, { useRouter } from 'next/router';
import BottomSlider from '@components/global/bottom-slider/BottomSlider';
import { ObjectMarker } from '@components/GoogleMaps/objectMarker';
import { FilterContext } from 'contexts/FilterContext';
import { DirectionsRenderer } from '@react-google-maps/api';
import { categoriesRes, iconMap, filterByCategory } from '@utils/filter';
import { categoryList } from '../GoogleMaps/objectMarker';

const HomePage = ({ locations }: any) => {
    function findLocation(category: any, locations: any) {
        const result = [];
        for (const el of category) {
            for (const location of locations) {
                if (el.cnetID === location.trcItemCategories.types[0]?.catid) {
                    result.push(location);
                }
            }
        }
        return result;
    }

    const enhancedCategories: any[] = [];
    categoryList.forEach((cat: any) => {
        const enhancedCategory = {
            categoryName: cat.categorization,
            items: findLocation(cat.child, locations),
        };
        enhancedCategories.push(enhancedCategory);
    });

    const { query } = useRouter();
    const [mounted, setMounted] = React.useState(false);
    // Default value set to Deventer in the case that geolocation doesnt work
    const [lat, setLat] = React.useState(52.2661);
    const [lng, setLng] = React.useState(6.1552);
    const [zoom, setZoom] = React.useState(16);

    const [directions, setDirections] =
        useState<google.maps.DirectionsResult>();

    // Reverse geocode marker position
    const geocoder = new google.maps.Geocoder();

    const [dataLocation, setDataLocation] = React.useState<any[]>([]);

    // bottom slider state
    const [bottomSlider, setBottomSlider] = React.useState<any>(null);

    const filterContext = useContext(FilterContext);

    React.useEffect(() => {
        if (!mounted) return;
        geocoder.geocode({ location: { lat, lng } });
    }, [geocoder, lat, lng, mounted]);

    React.useEffect(() => {
        setDataLocation(locations);
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
            <div className="flex flex-col w-full h-full overflow-hidden">
                <Navbar
                    setBottomSlider={setBottomSlider}
                    dataLocation={dataLocation}
                />

                <GoogleMap
                    enhancedCategories={enhancedCategories}
                    center={{ lat, lng }}
                    zoom={zoom}
                    style={{ width: '100%', height: '100%' }}
                    clickableIcons={false}
                    mapId="9c7cb3e171b411ff"
                    gestureHandling={'greedy'}
                    locations={locations}
                    setBottomSlider={setBottomSlider}
                >
                    <UserLocationMarker
                        position={{ lat, lng }}
                        setLat={setLat}
                        setLng={setLng}
                    />

                    {dataLocation &&
                        dataLocation.map((location: any) => {
                            if (!location.location.address.gisCoordinates[0]) {
                                return;
                            }
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
                                            .catid
                                    }
                                />
                            );
                        })}
                    {bottomSlider && (
                        <BottomSlider
                            destinationCoords={{
                                lat: parseFloat(
                                    bottomSlider?.location?.address
                                        ?.gisCoordinates[0].xcoordinate,
                                ),
                                lng: parseFloat(
                                    bottomSlider?.location?.address
                                        ?.gisCoordinates[0].ycoordinate,
                                ),
                            }}
                            setDirections={setDirections}
                            currentUserLocation={{ lat, lng }}
                            id={bottomSlider?.id}
                            header={bottomSlider?.trcItemDetails[0]?.title}
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

                    <DirectionsRenderer directions={directions} />
                </GoogleMap>
            </div>
        </>
    );
};
export default HomePage;
