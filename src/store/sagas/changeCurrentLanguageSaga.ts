import { call, put, takeEvery } from "redux-saga/effects";
import { persistanceService } from "../../services/persistenceService";
import { changeCurrentLanguage, setCurrentLanguage } from "../reducers/optionsSlice";
import { ChangeCurrentLanguageAction } from "../types/changeCurrentLanguageAction";

function* changeCurrentLanguageWorker({payload}: ChangeCurrentLanguageAction) {
  try {
    yield call(persistanceService.set, "currentLanguage", payload);
    yield put(setCurrentLanguage(payload));
  } catch (error) {
    throw new Error(error.message);
  }
}

export function* changeCurrentLanguageWatcher() {
  yield takeEvery(changeCurrentLanguage.type, changeCurrentLanguageWorker)
}

