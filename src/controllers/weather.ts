import sender from "../shared/sender";
import { WEATHER_API_URL, WEATHER_API_KEY, WEATHER_UNITS } from "../configs/env";

import CityDB from "../db/city/city.mock";

const cityDB = new CityDB();

class Weather {
  public async search(params: any) {
    const cities = await cityDB.getByName(params.query);

    return { cities };
  }

  public async info(params: any) {
    const url = `${WEATHER_API_URL}weather?appid=${WEATHER_API_KEY}&lat=${params.lat}&lon=${params.lon}&units=${WEATHER_UNITS}`;

    const result = await sender.get(url);

    return result;
  }

  public async cityWeather(params: any) {
    const url = `${WEATHER_API_URL}weather?appid=${WEATHER_API_KEY}&q=${params.query}`;

    const result = await sender.get(url);

    return result;
  }
}

const weather = new Weather();

export default weather;
