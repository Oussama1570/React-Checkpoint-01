import React from "react";
import { productData } from "./product";
import './App.css';

const Name = () => {
  return (
    <h2>{productData.name}</h2>
  );
};

export default Name;