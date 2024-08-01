import axios from "axios";

const baseURL = "";

const instance = axios.create({ baseURL, timeout: 1000 * 5 });

instance.interceptors.request.use((config) => {
  config.withCredentials(true);
  config.headers["Access-Control-Allow-Origin"] = "*";

  if (localStorage.stageContainer) {
    const storage = JSON.parse(localStorage.stageContainer);

    if (storage["user-token"]) {
      config.headers.Authorization = `Bearer ${storage["user-token"]}`;
    }
  }
  return config;
});

export default instance;
