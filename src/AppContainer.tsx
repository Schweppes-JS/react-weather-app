import React, { FunctionComponent } from 'react';
import { Provider } from "react-redux";
import App from './App';
import { store } from "./store";

const AppContainer: FunctionComponent = () => {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
}

export default AppContainer;