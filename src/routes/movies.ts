import { Router, Request, Response } from "express";
const validator = require("express-joi-validation").createValidator({});

const router = Router();

import schemaDetails from "../validators/movie/details";
import schemaSearch from "../validators/movie/search";

import movie from "../controllers/movie";

/* GET movies by query params */
router.get("/search", validator.query(schemaSearch), async (req: Request, res: Response) => {
  const result = await movie.search(req.query);

  res.send(result);
});

/* GET city info by imdbID */
router.get("/details/:imdbID", validator.params(schemaDetails), async (req: Request, res: Response) => {
  const result = await movie.details(req.params);

  res.send(result);
});

export default router;
