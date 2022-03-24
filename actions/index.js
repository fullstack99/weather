import { createActions } from "redux-actions";

const weatherActions = createActions({
  GET_WEATHER_REQUEST: undefined,
  GET_WEATHER_SUCCESS: undefined,
  GET_WEATHER_FAILED: undefined,
  CLEAR_STORE: undefined,
});

export { weatherActions };
