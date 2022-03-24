import axios from "axios";

import { API_KEY, BASE_URL } from "./config";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const getRequest = (url, params) => axios.get(url, params);

export const getWeather = ({ coordinates, exclude }) =>
  getRequest(BASE_URL, {
    params: {
      lat: coordinates.lat,
      lon: coordinates.lon,
      exclude: exclude,
      units: "metric",
      appid: API_KEY,
    },
  });
