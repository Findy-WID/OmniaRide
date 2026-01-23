// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useTripStore from '../store/tripStore';

// Fix default marker icon issue (common Leaflet + React setup gotcha)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const defaultCenter = [6.5244, 3.3792]; // Lagos

function MapView() {
  const trip = useTripStore((state) => state.trip);

  // You can later use trip.pickup / trip.dropoff coordinates here
  const center = trip?.pickup?.latLng || defaultCenter;

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="h-full w-full"
      zoomControl={true}
      scrollWheelZoom={true}
      doubleClickZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <Marker position={center} />
      {/* Add more markers/polylines when trip is active */}
    </MapContainer>
  );
}

export default MapView;