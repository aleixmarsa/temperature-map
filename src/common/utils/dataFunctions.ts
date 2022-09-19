import citiesData from "../../data/data.json";

interface City {
    id: number;
    name: string;
    coords: Array<number>;
  }
  
  interface Temperature {
    high: number;
    low: number;
  }

export const getCititesCoords = (): Array<{id:number, name:string, coords:Array<number>}> => {
    const cititesCoords: Array<City> = citiesData.map((city) =>{
        return  {
            id: city.id,
            name: city.city,
            coords: city.coords
        }
    })
    return cititesCoords;
};

export const getCityTemperature = (id:string) => {
    const cityTemperature: Array<Temperature> = citiesData.filter((city)=> city.id === parseInt(id))[0].monthlyAvg.map(({high, low}) =>({ high, low}))
    return cityTemperature
}

