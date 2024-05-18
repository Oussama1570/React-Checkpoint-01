import React from "react";
import {  productData } from "./product";
import './App.css';

const Price = () => {
  return (
    <h2>{productData.price}</h2>
  );
};

export default Price;