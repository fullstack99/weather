import { handleActions } from "redux-actions";

import { weatherActions } from "../actions";

const initState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
};

const weatherReducer = handleActions(
  {
    [weatherActions.getWeatherRequest]: (state) => {
      return { ...state, loading: true, loaded: false, data: null };
    },
    [weatherActions.getWeatherSuccess]: (state, { payload }) => {
      return { ...state, loading: false, loaded: true, data: payload };
    },
    [weatherActions.getWeatherFailed]: (state, { payload }) => {
      return { ...state, loading: false, loaded: true, error: payload };
    },
    [weatherActions.clearStore]: (state) => {
      return { ...initState };
    },
  },
  initState
);

export default weatherReducer;
