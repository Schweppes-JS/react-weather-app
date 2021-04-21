import { WeatherData } from "../../types/weatherData";

export interface WeatherState {
  isLoading: boolean;
  weatherData: WeatherData | null;
  error: string | null;
}