import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentLanguage, changeTemperatureUnit } from "../../store/reducers/optionsSlice";
import { getWeatherByCity } from "../../store/reducers/weatherSlice";
import { RootState } from "../../store/types/rootState";
import style from "./Options.module.css";

const Options: FunctionComponent = () => {

  const dispatch = useDispatch();

  const temperatureUnit = useSelector((state: RootState) => state.options.temperatureUnit);
  const currentLanguage = useSelector((state: RootState) => state.options.currentLanguage);
  const city = useSelector((state: RootState) => state.weather.weatherData?.name)!;

  const onTemperatureUnitChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    dispatch(changeTemperatureUnit(event.currentTarget.value));
    dispatch(getWeatherByCity(city));
  }

  const onCurrentLanguageChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    dispatch(changeCurrentLanguage(event.currentTarget.value));
    dispatch(getWeatherByCity(city));
  }

  return (
    <div className={style.wrapper}>

      <select className={style.optionBlock} value={temperatureUnit} onChange={onTemperatureUnitChange}>
        <option className={style.optionLine} value="°F">°F</option>
        <option className={style.optionLine} value="°C">°C</option>
      </select>

      <select className={style.optionBlock} value={currentLanguage} onChange={onCurrentLanguageChange}>
        <option className={style.optionLine } value="en">English</option>
        <option className={style.optionLine} value="ru">Русский</option>
        <option className={style.optionLine} value="ua">Українська</option>
      </select>

    </div>
  )
}

export default Options;
