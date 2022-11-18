import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import { Alert, Dialog, Typography } from '@mui/material';

export default function MapView() {
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
      locationerror(e){
        alert("Die Ermittlung Ihres Standortes ist fehlgeschlagen. Bitte erlauben Sie die GPS Nutzung oder geben Sie die Adresse manuell ein.")
      }
    })
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
    <React.Fragment>
      <Typography variant="body1">Um Ihren Standort zu finden, klicken Sie bitte auf die Map.</Typography>
      <MapContainer style={{height: "40vh", width:"50vw"}} center={[49.47968, 8.46982]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </React.Fragment>
  );
}
