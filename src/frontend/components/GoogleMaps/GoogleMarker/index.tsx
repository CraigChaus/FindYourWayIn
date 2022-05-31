import { DirectionsRenderer, Marker } from '@react-google-maps/api';
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils';
import { posix } from 'path';
import React, { SetStateAction } from 'react';
import LocationMarker from '../../homepage/LocationMarker';

interface MarkerProps extends google.maps.MarkerOptions{
    setLat: React.Dispatch<SetStateAction<number>>
    setLng: React.Dispatch<SetStateAction<number>>
    setAddress: React.Dispatch<SetStateAction<string>>
}

type DirectionsResult = google.maps.DirectionsResult;
type latLng = google.maps.LatLng;
type latLngLiteral = google.maps.LatLngLiteral




const destination: latLngLiteral =  {
    lat: 52.2661,
    lng: 6.1552
}


const GoogleMarker: React.FC<MarkerProps> = ({
    setLat,
    setLng,
    setAddress,
    ...options
}) => {
    const [ marker, setMarker ] = React.useState<google.maps.Marker | null>();
    const [ directions, setDirections ] = React.useState<DirectionsResult>();
    
    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        };
  
        return () => {
            if (marker) {
                marker.setMap(null);
            };
        };
    }, [marker]);


    const fetchDirections = (markerPos: latLngLiteral, currentPos: latLngLiteral | undefined | string) => {
        if(!currentPos) return;

        const service = new google.maps.DirectionsService();
        service.route(
            {
                origin: currentPos,
                destination: markerPos,
                travelMode: google.maps.TravelMode.WALKING
        },
        (result, status) => {
            if(status === "OK" && result){
                setDirections(result);
            }
        }
      )
    }
    
    React.useEffect(() => {
        if (marker instanceof google.maps.Marker) {
            marker.setOptions(options);
            marker.addListener('dragend', () => {
                if (marker) {
                    setLat(marker.getPosition()!.lat());
                    setLng(marker.getPosition()!.lng());
                    setAddress(marker.getPosition()!.toUrlValue());
                    fetchDirections(destination, marker.getPosition()?.toString());
                }
            });
        }
    }, [marker, options]);
  
    return <>
            {directions && <DirectionsRenderer/>}
            </>
};
export default GoogleMarker;