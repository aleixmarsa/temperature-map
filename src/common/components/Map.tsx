import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { checkServerIdentity } from "tls";
import { Icon } from "leaflet";

interface City {
  id: number;
  name: string;
  coords: [number, number];
}

interface Temperature {
  high: number;
  low: number;
}

interface MapState{
  citites: Array<City>;
  temperatures: Array<Temperature>;
}

const Map = () => {
  const [citites, setCities] = useState<MapState["citites"]>([]);
  const [temperatures, setTemperatures] = useState<MapState["temperatures"]>([]);

  const fetchCititesCoords = async () => {
    const baseURL = window.location.href;
    const response = await axios.get(`${baseURL}api/cities`);
    setCities(response.data);
  };

  const handleCLick = async (id: number) => {
    console.log("🚀 ~ file: Map.tsx ~ line 18 ~ handleCLick ~ id", id);
    const baseURL = window.location.href;
    const response = await axios.get(`${baseURL}api/${id}`);
    setTemperatures(response.data);
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
        {citites.map((city, index) => {
          return (
            <Marker
              key={city.id}
              position={city.coords}
              icon={
                new Icon({
                  iconUrl: "./thermometer_marker.png",
                  iconSize: [40, 40],
                  iconAnchor: [20, 30],
                })
              }
              eventHandlers={{
                click: (e) => handleCLick(city.id),
              }}
            >
              <Popup>
                <span className="font-bold">{city.name}</span>
                {temperatures.map((month, index) => {
                  return (
                    <div key={index}>
                      <h6>High {month.high}</h6>
                      <h6>Low {month.low}</h6>
                    </div>
                  );
                })}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
