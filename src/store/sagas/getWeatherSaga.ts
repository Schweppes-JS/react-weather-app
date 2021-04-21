import { AxiosResponse } from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { getCurrentLanguage, getTemperatureUnit } from "../../selectors/optionsSelector";
import { getPosition } from "../../services/getPositionService";
import { getWeatherService } from "../../services/getWeatherService";
import { translateService } from "../../services/translateService";
import { Coordinates } from "../../types/coordinates";
import { getWeather, getWeatherFailure, getWeatherSuccess } from "../reducers/weatherSlice";

function* getWeatherWorker() {
  try {
    const location: GeolocationPosition = yield call(getPosition);
    const coordinates: Coordinates = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
    const currentLanguage: string = yield select(getCurrentLanguage);
    const temperatureUnit: string = yield select(getTemperatureUnit);
    const response: AxiosResponse = yield call(getWeatherService.byCoordinates, coordinates, temperatureUnit, currentLanguage);
    yield put(getWeatherSuccess(response.data));
  } catch (error) {
    const currentLanguage: string = yield select(getCurrentLanguage);
    yield put(getWeatherFailure(translateService("geolocationError", currentLanguage)));
  }
}

export function* getWeatherWatcher() {
  yield takeEvery(getWeather.type, getWeatherWorker)
}

