import axios from "axios";

const baseURL = "https://port-0-server-1272llx0bndkw.sel5.cloudtype.app/";

const instance = axios.create({ baseURL, timeout: 1000 * 5 });

instance.interceptors.request.use((config) => {
  config.withCredentials = true;
  //config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Content-Type"] = "application/json";
  
  return config;
});

export default instance;
