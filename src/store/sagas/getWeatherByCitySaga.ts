import { AxiosResponse } from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { getCurrentLanguage, getTemperatureUnit } from "../../selectors/optionsSelector";
import { getWeatherService } from "../../services/getWeatherService";
import { translateService } from "../../services/translateService";
import { getWeatherByCity, getWeatherFailure, getWeatherSuccess } from "../reducers/weatherSlice";
import { GetWeatherByCityAction } from "../types/getWeatherByCityAction";

function* getWeatherByCityWorker({payload}: GetWeatherByCityAction) {
  try {
    const currentLanguage: string = yield select(getCurrentLanguage);
    const temperatureUnit: string = yield select(getTemperatureUnit);
    const response: AxiosResponse = yield call(getWeatherService.byCity, payload, temperatureUnit, currentLanguage);
    yield put(getWeatherSuccess(response.data));
  } catch (error) {
    const currentLanguage: string = yield select(getCurrentLanguage);
    yield put(getWeatherFailure(translateService("searchError", currentLanguage)));
  }
}

export function* getWeatherByCityWatcher() {
  yield takeEvery(getWeatherByCity.type, getWeatherByCityWorker)
}

