import React from "react";
import "../Sidebar/sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Type from "./Type/Type";

function Sidebar({ handleChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>Shop</h1>
      </div>
      <Category handleChange={handleChange} />
      <Type handleChange={handleChange} />
      <Price handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;
