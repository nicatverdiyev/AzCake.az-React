import React from "react";
import "../Products/products.css";
import Card from "../Card";

function Products({ result }) {
  return <section className="card-container">{result}</section>;
}

export default Products;
