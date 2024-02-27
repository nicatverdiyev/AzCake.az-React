import React from "react";
import Nav from "../../Navigation/Navigation.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function Shop() {
  return (
    <section style={{ position: "relative", top: 80 }}>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </section>
  );
}
