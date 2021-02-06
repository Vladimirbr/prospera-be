import { ICity } from "../../entities/city";

export interface ICityDB {
  getByName: (name: string) => Promise<ICity[]>;
}

class CityDB implements ICityDB {
  /**
   * @param name
   */
  public getByName(name: string): Promise<ICity[]> {
    return Promise.resolve([]);
  }
}

export default CityDB;
