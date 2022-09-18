import { getCityTemperature } from "../../common/utils/dataFunctions";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.id !== "string") {
    res.status(400).json({ err: "Invalid id" });
    return;
  }
  const cityTemperature: any = getCityTemperature(
    req.query.id
  );
  res.status(200).json(cityTemperature);
}
