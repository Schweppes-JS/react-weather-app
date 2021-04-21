import { OptionsState } from "./optionsState";
import { WeatherState } from "./weatherState";

export interface RootState {
  weather: WeatherState;
  options: OptionsState;
}