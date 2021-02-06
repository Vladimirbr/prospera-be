export interface ICity {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
}

class City implements ICity {
  id!: number;
  name!: string;
  state!: string;
  country!: string;
  coord!: { lon: number; lat: number };

  constructor() {}
}

export default City;
