import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import { Typography } from '@mui/material';

export default function MapView({ data, setData }) {
  //sets the initial position of the map, and provides the update function for the position
  const [position, setPosition] = useState([49.47968, 8.46982])
  //component used for the auto-location of the user
  function LocationMarker() {
    //locates to user onClick
    //if the locator works, the position is set and the map zooms on the found location
    //then the location is set in the data object to be send to the backend later
    //if no location is found, an error is shown in the alert box
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        setData({ ...data, coordinates: String(e.latlng) });
      },
      locationerror(e) {
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
      <MapContainer style={{ height: "40vh", width: "50vw" }} center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </React.Fragment>
  );
}
