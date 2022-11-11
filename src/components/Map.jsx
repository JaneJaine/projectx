import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { MapContainer, TileLayer, LayersControl, useMap } from 'react-leaflet';
import * as L from "leaflet";

export default function MapComp() {
  const mapRef = React.createRef();
  const [center, setCenter] = useState({ lat: 49.47968, lng: 8.46982 });
  const ZOOM_LEVEL = 16;

  const MapController = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;

      map.on('locationfound', handleOnLocationFound);
    })

    const handleOnLocationFound = (event) => {
      const latlng = event.latlng;
      const marker = L.marker(latlng);
      marker.addTo(map);

      const radius = event.accuracy;
      const circle = L.circle(latlng, { radius, color: '#26c6da' });
      circle.addTo(map);
    }
    function handleOnFindLocation() {
      const { current = {} } = mapRef;
      const { leafletElement: map } = current;

      map.locate({
        setView: true,
      });
    }
    return <Button onClick={handleOnFindLocation}>Locate</Button>;
  };





  return (
    <div>
      <MapContainer whenCreated={mapInstance => { this.mapRef.current = mapInstance }} className='map' center={center} zoom={ZOOM_LEVEL}>
        <MapController />
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
        </TileLayer>

      </MapContainer>

    </div>
  )
}
