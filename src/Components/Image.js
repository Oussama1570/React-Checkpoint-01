import React from "react";
import { productData } from "./product";
import './App.css';

const Image = () => {
  return (
    <h2>{productData.image}</h2>
  );
};

export default Image;