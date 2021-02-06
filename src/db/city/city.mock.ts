import { ICity } from "../../entities/city";
import { ICityDB } from "./city";
import MockDBMock from "../mock/mock";

class CityDB extends MockDBMock implements ICityDB {
  public async getByName(name: string): Promise<ICity[]> {
    const db = await super.openDb();

    const result = db.filter((city: ICity) => {
      return city.name.toLowerCase().includes(name.toLowerCase());
    });

    return result;
  }
}

export default CityDB;
