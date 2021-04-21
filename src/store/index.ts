import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import optionsSlice from "./reducers/optionsSlice";
import weatherSlice from "./reducers/weatherSlice";
import { rootWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    options: optionsSlice
  },
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
  devTools: true
});

sagaMiddleware.run(rootWatcher);