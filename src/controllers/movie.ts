import sender from "../shared/sender";
import { MOVIES_API_URL, MOVIES_API_KEY } from "../configs/env";

class Movie {
  public async search(params: any) {
    const url =
      `${MOVIES_API_URL}?apikey=${MOVIES_API_KEY}&page=${params.page}&s=${params.title}` +
      (params.year ? `&y=${params.year}` : "") +
      (params.type ? `&type=${params.type}` : "");

    const result = await sender.get(url);

    return result;
  }

  public async details(params: any) {
    const url = `${MOVIES_API_URL}?apikey=${MOVIES_API_KEY}&i=${params.imdbID}`;

    const result = await sender.get(url);

    return result;
  }
}

const movie = new Movie();

export default movie;
