import citiesData from "../pages/data/data.json";

const getCititesCoords = () => {
    const cititesCoords = citiesData.map((city) =>{
        return  {
            name: city.city,
            coords: city.coords

        }
    })
    return cititesCoords;
};



export default getCititesCoords;
