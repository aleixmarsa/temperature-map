
import L from "leaflet";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"

const musicEvents = [
    {
      position: [41.39784488622993, 2.191078598731124],
      location: "Razmatazz",
      date: "12th August",
      artist: "Kendrick Lamar",
    },
    {
      position: [41.39600184852106, 2.1886431531212955],
      location: "WOLF",
      date: "15th August",
      artist: "Rosalia",
    },
  ];
  
  const drinkEvents = [
    {
      position: [41.39858530584905, 2.1876775579557957],
      location: "Lorem Ipsum",
      date: "12th August",
      artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      position: [41.394376068838014, 2.189694578968173],
      location: "Lorem Ipsum",
      date: "15th August",
      artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  
  const Map = () => {
    const currentPosition = new L.LatLng(41.39770124637789, 2.1904024540457168);
  
    
    return (
      <div>
        <MapContainer center={currentPosition} zoom={2.5} maxBounds={[[-90,-180],   [90,180]]} maxBoundsViscosity={1.0}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={20}
            minZoom={2.5}
            noWrap={true}
          ></TileLayer>
          {/* <Marker position={currentPosition} /> */}
        </MapContainer>
      </div>
    );
  };

  export default Map;
