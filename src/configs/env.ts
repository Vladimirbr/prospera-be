import dotenv from "dotenv";

// ENV var config
dotenv.config();

export const PORT = process.env.PORT ? process.env.PORT : "3000";

export const MOVIES_API_URL = process.env.MOVIES_API_URL ? process.env.MOVIES_API_URL : "http://www.omdbapi.com/";
export const MOVIES_API_KEY = process.env.MOVIES_API_KEY ? process.env.MOVIES_API_KEY : "dce24c91";

export const WEATHER_API_URL = process.env.WEATHER_API_URL ? process.env.WEATHER_API_URL : "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY ? process.env.WEATHER_API_KEY : "c2152ce33eec94f628bcb40cda3da446";
export const WEATHER_UNITS = process.env.WEATHER_UNITS ? process.env.WEATHER_UNITS : "metric";
