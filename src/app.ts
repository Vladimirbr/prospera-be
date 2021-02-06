import express from "express";
import compression from "compression";
import cors from "cors";
import StatusCodes from "http-status-codes";
import logger from "morgan";

// Module for catching all async erros
import "express-async-errors";

import indexRouter from "./routes/index";
import moviesRouter from "./routes/movies";
import weatherRouter from "./routes/weather";

const app: express.Application = express();

const { BAD_REQUEST } = StatusCodes;

app.use(cors());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/weather", weatherRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

export default app;
