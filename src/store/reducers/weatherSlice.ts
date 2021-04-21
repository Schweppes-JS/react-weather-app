import { createSlice } from "@reduxjs/toolkit";
import { GetWeatherByCityAction } from "../types/getWeatherByCityAction";
import { GetWeatherFailureAction } from "../types/getWeatherFailureAction";
import { GetWeatherSuccessAction } from "../types/getWeatherSuccessAction";
import { WeatherState } from "../types/weatherState";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    weatherData: null,
    error: null
  },
  reducers: {
    getWeather: (state: WeatherState): void => {
      state.isLoading = true;
    },
    getWeatherSuccess: (state: WeatherState, action: GetWeatherSuccessAction): void => {
      state.weatherData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getWeatherFailure: (state: WeatherState, action: GetWeatherFailureAction): void => {
      state.error = action.payload;
      state.isLoading = false;
    },
    getWeatherByCity: (state: WeatherState, action: GetWeatherByCityAction): void => {
      state.isLoading = true;
    }
  }
});

export default weatherSlice.reducer;
export const { getWeather, getWeatherSuccess, getWeatherFailure, getWeatherByCity } = weatherSlice.actions;