'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const lightMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "water",
    stylers: [{ color: "#c9c9c9" }],
  },
];

const mapOptions = {
  styles: lightMapStyle,
  zoomControl: true,
  scrollwheel: true,
  draggable: false,
  mapTypeControl: false,
  fullscreenControl: false, // Removes the fullscreen icon
};

export default function LogisticsMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={mapOptions}
        
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
