import { call, cancelled, put, takeLatest } from "redux-saga/effects";

import { weatherActions } from "../actions";
import * as API from "../services/api";

function* getWeather({ payload }) {
  try {
    const { data } = yield call(API.getWeather, payload);
    yield put(weatherActions.getWeatherSuccess(data));
  } catch (err) {
    yield put(weatherActions.getWeatherFailed(err.message));
  } finally {
    if (yield cancelled()) {
      console.log("getWeather task cancelled.");
    }
  }
}

export default function* weatherSagas() {
  yield takeLatest(weatherActions.getWeatherRequest, getWeather);
}
