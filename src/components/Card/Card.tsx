import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/rootState";
import style from "./Card.module.css";

const Card: FunctionComponent = () => {
  
  const date = new Date((useSelector((state: RootState) => state.weather.weatherData?.dt))! * 1000).toLocaleDateString();
  const city = useSelector((state: RootState) => state.weather.weatherData?.name);
  const icon = useSelector((state: RootState) => state.weather.weatherData?.weather[0].icon);
  const description = useSelector((state: RootState) => state.weather.weatherData?.weather[0].description);
  const temprature = useSelector((state: RootState) => state.weather.weatherData?.main.temp)?.toFixed(1);
  const temperatureUnit = useSelector((state: RootState) => state.options.temperatureUnit);
  
  return (
    <div className={style.wrapper}>

      <div className={style.infoBlock}>
        <p className={style.infoLine}>{city}</p>
        <p className={style.infoLine}>{date}</p>
      </div>

      <div className={style.infoBlock}>
        <div className={style.infoLine}>
          <img src={icon && `http://openweathermap.org/img/wn/${icon}@2x.png`} alt={`${description}`}/>
        </div>
        <p className={style.infoLine}>{description}</p>
      </div>
      
      <div className={style.infoBlock}>
        <p className={style.infoLine}>{temprature}</p>
        <p className={style.infoLine}>{temperatureUnit}</p>
      </div>

    </div>
  )
}

export default Card;
