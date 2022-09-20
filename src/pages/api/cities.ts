
import type { NextApiRequest, NextApiResponse } from "next";
import citiesData from "../../data/data.json";

interface City {
  id: number;
  name: string;
  coords: Array<number>;
}

export const getCities = (): Array<{id:number, name:string, coords:Array<number>}> => {
  const cititesCoords: Array<City> = citiesData.map((city) =>{
      return  {
          id: city.id,
          name: city.city,
          coords: city.coords
      }
  })
  return cititesCoords;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const citiesCoords: Array<{
    id: number;
    name: string;
    coords: Array<number>;
  }> = getCities();
  res.status(200).json(citiesCoords);
}

