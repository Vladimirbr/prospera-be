import axios from "axios";

import retry from "async-retry";

class Sender {
  get = async (url: string) => {
    const res = await retry(
      async () => {
        const response = await axios.get(url);

        return response.data;
      },
      {
        retries: 5,
      }
    );

    return res;
  };
}

const sender = new Sender();

export default sender;
