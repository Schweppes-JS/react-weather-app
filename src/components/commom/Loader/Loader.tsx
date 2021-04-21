import React, { FunctionComponent } from 'react';
import loader from "../../../assets/images/loader.svg";

const Loader: FunctionComponent = () => {
  return (
    <>
      <img src={loader} alt="Loading..."/>
    </>
  )
}

export default Loader
