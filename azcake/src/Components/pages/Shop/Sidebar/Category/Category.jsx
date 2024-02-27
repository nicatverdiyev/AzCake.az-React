import React from "react";
import "../Category/category.css";
function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Ready Cake
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Mini Cake
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Cheese Cake
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Gift Box
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flowers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Engagement Cake
        </label>
      </div>
    </div>
  );
}

export default Category;
