import React from "react";
import { productData } from "./product";
import './App.css';

const Description = () => {
  return (
    <h2>{productData.description}</h2>
  );
};

export default Description;