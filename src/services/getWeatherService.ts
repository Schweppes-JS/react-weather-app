import axios, { AxiosResponse } from "axios";
import { Coordinates } from "../types/coordinates";

const key = "cacbd70b82a328cf33e7567db06fbff4";

const instance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/",
});

export const getWeatherService = {

  byCoordinates: (coordinates: Coordinates, temperatureUnit = "°C", language = 'en'): Promise<AxiosResponse> => {

    const units: {[key: string]: string} = {
      "°C": "metric",
      "°F": "imperial"
    }

    return instance.get(`weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=${units[temperatureUnit]}&lang=${language}&appid=${key}`)
  },

  byCity: (city: string, temperatureUnit = "°C", language = 'en'): Promise<AxiosResponse> => {

    const units: {[key: string]: string} = {
      "°C": "metric",
      "°F": "imperial"
    }

    return instance.get(`weather?q=${city}&units=${units[temperatureUnit]}&lang=${language}&appid=${key}`)
  }
}