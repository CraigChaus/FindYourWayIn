import { DirectionsRenderer, Marker } from '@react-google-maps/api';
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils';
import { posix } from 'path';
import React, { SetStateAction } from 'react';
import LocationMarker from '../../LocationMarker';

interface MarkerProps extends google.maps.MarkerOptions{
    setLat: React.Dispatch<SetStateAction<number>>
    setLng: React.Dispatch<SetStateAction<number>>
    setAddress: React.Dispatch<SetStateAction<string>>
}

type DirectionsResult = google.maps.DirectionsResult;
type latLngLiteral = google.maps.LatLngLiteral;


const GoogleMarker: React.FC<MarkerProps> = ({
    setLat,
    setLng,
    setAddress,
    ...options
}) => {
    const [ marker, setMarker ] = React.useState<google.maps.Marker | null>();
    const [ dragging, setDragging ] = React.useState<boolean>(false);
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


    const fetchDirections = (markerPos: latLngLiteral, currentPos: latLngLiteral) => {
        if(!currentPos) return;

        const service = new google.maps.DirectionsService();
        service.route(
            {
                origin: markerPos,
                destination: currentPos,
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
        if (marker) {
            marker.setOptions(options);
        };
    }, [marker, options]);
  
    return <>
            {directions && <DirectionsRenderer/>}
            </>
};
export default GoogleMarker;