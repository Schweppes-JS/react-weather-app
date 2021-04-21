import { all } from "redux-saga/effects";
import { changeCurrentLanguageWatcher } from "./changeCurrentLanguageSaga";
import { changeTemperatureUnitWatcher } from "./changeTemperatureUnitSaga";
import { getOptionsWatcher } from "./getOptionsSaga";
import { getWeatherByCityWatcher } from "./getWeatherByCitySaga";
import { getWeatherWatcher } from "./getWeatherSaga";

export function* rootWatcher() {
  yield all([getWeatherWatcher(), getOptionsWatcher(), changeCurrentLanguageWatcher(), changeTemperatureUnitWatcher(),
    getWeatherByCityWatcher()]);
}