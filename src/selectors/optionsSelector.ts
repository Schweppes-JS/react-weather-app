import { RootState } from "../store/types/rootState";

export const getCurrentLanguage = (state: RootState) => state.options.currentLanguage;
export const getTemperatureUnit = (state: RootState) => state.options.temperatureUnit;
