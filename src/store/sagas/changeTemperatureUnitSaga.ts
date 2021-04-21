import { call, put, takeEvery } from "redux-saga/effects";
import { persistanceService } from "../../services/persistenceService";
import { changeTemperatureUnit, setTemperatureUnit} from "../reducers/optionsSlice";
import { ChangeTemperatureUnitAction } from "../types/changeTemperatureUnitAction";

function* changeTemperatureUnitWorker({payload}: ChangeTemperatureUnitAction) {
  try {
    yield call(persistanceService.set, "temperatureUnit", payload);
    yield put(setTemperatureUnit(payload));
  } catch (error) {
    throw new Error(error.message);
  }
}

export function* changeTemperatureUnitWatcher() {
  yield takeEvery(changeTemperatureUnit.type, changeTemperatureUnitWorker)
}

