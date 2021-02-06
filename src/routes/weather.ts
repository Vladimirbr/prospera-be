import { Router, Request, Response } from "express";
const validator = require("express-joi-validation").createValidator({});

const router = Router();

import schemaCities from "../validators/weather/cities";
import schemaCity from "../validators/weather/city";
import schemaInfo from "../validators/weather/info";

import weather from "../controllers/weather";

/* GET cities by query */
//https://bulk.openweathermap.org/sample/city.list.json.gz
router.get("/cities", validator.query(schemaCities), async (req: Request, res: Response) => {
  const result = await weather.search(req.query);

  res.send(result);
});

/* GET city weather by city name */
router.get("/city", validator.query(schemaCity), async (req: Request, res: Response) => {
  const result = await weather.cityWeather(req.query);

  res.send(result);
});

/* GET city info by lat lon */
router.get("/info", validator.query(schemaInfo), async (req: Request, res: Response) => {
  const result = await weather.info(req.query);

  res.send(result);
});

export default router;
