export interface WeatherData {
  message: string;
  base: string;
  clouds: Cloud;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: MainData;
  name: string;
  sys: SystemData;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: IWInd;
}

interface Cloud {
  all : number;
}

interface Coord {
  lon : number;
  lat : number;
}

interface MainData {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min:number;
  sea_level?: number;
  grnd_level? : number;
}

interface SystemData {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
  message? : string;
}

interface Weather {
  id : number;
  main : string;
  description : string;
  icon : string;
}

interface IWInd {
  speed : number;
  deg : number;
  gust? : number;
}