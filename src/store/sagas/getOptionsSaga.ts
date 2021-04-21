import { call, put, takeEvery } from "redux-saga/effects";
import { persistanceService } from "../../services/persistenceService";
import { getOptions, setCurrentLanguage, setTemperatureUnit } from "../reducers/optionsSlice";

function* getOptionsWorker() {
  try {
    const temperatureUnit: string = yield call(persistanceService.get, "temperatureUnit");
    if(temperatureUnit) {
      yield put(setTemperatureUnit(temperatureUnit));
    }
    const currentLanguage: string = yield call(persistanceService.get, "currentLanguage");
    if(currentLanguage) {
      yield put(setCurrentLanguage(currentLanguage));
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export function* getOptionsWatcher() {
  yield takeEvery(getOptions.type, getOptionsWorker)
}

