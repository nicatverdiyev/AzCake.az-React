import React, { useState } from "react";
import Nav from "../../Navigation/Navigation.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
// import "../Shop/data/data.js";
import products from "./data/data.js";
import Card from "./Card.jsx";
// import Readycakes from "../Readycake/Readycakes.jsx";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // İnput filter etme

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button filter

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <section style={{ position: "relative", top: 72 }}>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </section>
  );
}
