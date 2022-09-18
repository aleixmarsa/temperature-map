import citiesData from "../../data/data.json";

const getCititesCoords = (): {name:string, coords:number[]}[] => {
    const cititesCoords = citiesData.map((city) =>{
        return  {
            name: city.city,
            coords: city.coords

        }
    })
    return cititesCoords;
};



export default getCititesCoords;
