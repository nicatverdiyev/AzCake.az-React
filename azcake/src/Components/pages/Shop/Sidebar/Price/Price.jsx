import React from "react";
import "../Price/price.css";

function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>₼0 - ₼20
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>₼20 - ₼50
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>₼50 - ₼70
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>₼70 - ₼100
      </label>
    </div>
  );
}

export default Price;
