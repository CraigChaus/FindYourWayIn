import React, { SetStateAction } from 'react';

interface MarkerProps extends google.maps.MarkerOptions {
    setLat: React.Dispatch<SetStateAction<number>>;
    setLng: React.Dispatch<SetStateAction<number>>;
}

const UserLocationMarker: React.FC<MarkerProps> = ({
    setLat,
    setLng,
    ...options
}) => {
    const [userMarker, setUserMarker] = React.useState<google.maps.Marker>();

    React.useEffect(() => {
        if (userMarker && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const position = pos.coords;
                if (position) {
                    setLat(position.latitude);
                    setLng(position.longitude);
                }
            });
            navigator.geolocation.watchPosition((pos) => {
                const position = pos.coords;
                if (position) {
                    setLat(position.latitude);
                    setLng(position.longitude);
                }
            });
        }
    }, [userMarker]);
    React.useEffect(() => {
        if (!userMarker) {
            setUserMarker(
                new google.maps.Marker({
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillOpacity: 1,
                        strokeWeight: 2,
                        fillColor: '#5384ED',
                        strokeColor: '#ffffff',
                    },
                }),
            );

        }

        return () => {
            if (userMarker) userMarker.setMap(null);
        };
    }, []);

    React.useEffect(() => {
        if (userMarker) {
            userMarker.setOptions(options);
        }
    }, [options, userMarker]);

    return null;
};

export default UserLocationMarker;
