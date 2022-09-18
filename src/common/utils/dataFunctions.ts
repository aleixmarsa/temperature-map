import citiesData from "../../data/data.json";

export const getCititesCoords = (): {id:number, name:string, coords:number[]}[] => {
    const cititesCoords = citiesData.map((city) =>{
        return  {
            id: city.id,
            name: city.city,
            coords: city.coords

        }
    })
    return cititesCoords;
};

export const getCityTemperature = (id:string) => {
    const cityTemperature: Object = citiesData.filter((city)=> city.id === parseInt(id))
    return cityTemperature
}

