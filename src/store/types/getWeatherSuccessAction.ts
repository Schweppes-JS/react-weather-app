import { WeatherData } from "../../types/weatherData";

export interface GetWeatherSuccessAction {
  type: string;
  payload: WeatherData;
}