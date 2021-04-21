export interface GetWeatherAction {
  type: string;
  payload: {
    temperatureUnit: string;
    currentLanguage: string;
  }
}