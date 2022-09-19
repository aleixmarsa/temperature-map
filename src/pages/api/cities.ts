import { getCititesCoords } from "../../common/utils/dataFunctions";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const citiesCoords: Array<{
    id: number;
    name: string;
    coords: Array<number>;
  }> = getCititesCoords();
  res.status(200).json(citiesCoords);
}
