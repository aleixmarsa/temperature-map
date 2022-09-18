import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import getCititesCoords from "../utils/dataFunctions";
import { checkServerIdentity } from "tls";
import { Icon } from "leaflet";
import ThermometerMarker from "../../assets/thermometer_marker.png";
const Map = () => {
  const [citites, setCities] = useState<any[]>([]);

  const fetchCititesCoords = async () => {
    const baseURL = window.location.href;
    const response = await axios.get(`${baseURL}api/cities`);
    setCities(response.data);
  };
  useEffect(() => {
    fetchCititesCoords();
  }, []);
  const currentPosition = new L.LatLng(41.39770124637789, 2.1904024540457168);
  return (
    <div>
      <MapContainer
        center={currentPosition}
        zoom={2.5}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          // url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
          // subdomains={['mt0','mt1','mt2','mt3']}
          maxZoom={20}
          minZoom={2.5}
          noWrap={true}
        ></TileLayer>
        {citites.map((city) => {
          return (
            <Marker
              key={city.coords}
              position={city.coords}
              icon={
                new Icon({
                  iconUrl: "./thermometer_marker.png",
                  iconSize: [40, 40],
                  iconAnchor: [20, 30],
                })
              }
            >
              <Popup>
                <span className="font-bold">{city.name}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
