import React from "react";
import "../Sidebar/sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Type from "./Type/Type";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>Shop</h1>
      </div>
      <Category />
      <Price />
      <Type />
    </section>
  );
}

export default Sidebar;
