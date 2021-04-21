import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from './App.module.css';
import Card from "./components/Card/Card";
import Loader from "./components/commom/Loader/Loader";
import Options from "./components/Options/Options";
import Searcher from "./components/Searcher/Searcher";
import { getOptions } from "./store/reducers/optionsSlice";
import { getWeather } from "./store/reducers/weatherSlice";
import { RootState } from "./store/types/rootState";

const App: FunctionComponent = () => {

  const isLoading = useSelector((state: RootState) => state.weather.isLoading);
  const error = useSelector((state: RootState) => state.weather.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOptions());
    dispatch(getWeather());
  }, []);

  return (
    <>
      {
      isLoading ?
        <Loader /> : 
        <div className={style.wrapper}>
          <Options />
          <Searcher />
          {error ? <h1 className={style.error}>{error}</h1> : <Card />}
        </div>
      }
    </>
  );
}

export default App;
