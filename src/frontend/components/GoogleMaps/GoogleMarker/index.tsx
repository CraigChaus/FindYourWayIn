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
    const [ marker, setMarker ] = React.useState<google.maps.Marker>();
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
            marker.addListener('drag', () => setDragging(true));
            marker.addListener('dragend', () => {
                if(!dragging){
                    const lat = marker.getPosition()?.lat();
                    const lng = marker.getPosition()?.lng();
                    const latPos = options.position?.lat;
                    const lngPos = options.position?.lng;
                    marker.addListener('click', () => {
                        if(lat && lng){
                            setLat(lat);
                            setLng(lng);
                        };
                    });
                setDragging(false)
                }
            })
        };
    }, [marker, options]);
  
    return <>
            {directions && <DirectionsRenderer/>}
            </>
};
export default GoogleMarker;