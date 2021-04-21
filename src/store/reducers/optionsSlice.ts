import { createSlice } from "@reduxjs/toolkit";
import { ChangeTemperatureUnitAction } from "../types/changeTemperatureUnitAction";
import { OptionsState } from "../types/optionsState";

const optionSlice = createSlice({
  name: "options",
  initialState: {
    temperatureUnit: "°C",
    currentLanguage: "en"
  },
  reducers: {
    getOptions: (state: OptionsState): void => {
      // do nithig
    },
    setTemperatureUnit: (state: OptionsState, action): void => {
      state.temperatureUnit = action.payload;
    },
    setCurrentLanguage: (state: OptionsState, action): void => {
      state.currentLanguage = action.payload;
    },
    changeTemperatureUnit: (state: OptionsState, action: ChangeTemperatureUnitAction): void => {
      // do nithig
    },
    changeCurrentLanguage: (state: OptionsState, action): void => {
      // do nithig
    }
  }
});

export default optionSlice.reducer;
export const { getOptions, setTemperatureUnit, setCurrentLanguage,
  changeTemperatureUnit, changeCurrentLanguage } = optionSlice.actions
