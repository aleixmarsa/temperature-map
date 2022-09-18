import {getCititesCoords} from "../../common/utils/dataFunctions";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const citiesCoords: { id: number, name: string; coords: number[] }[] =
    getCititesCoords();
  res.status(200).json(citiesCoords);
}
