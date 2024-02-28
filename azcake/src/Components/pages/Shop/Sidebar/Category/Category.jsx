import React from "react";
import "../Category/category.css";
import Input from "../../Input";
function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Ready Cake"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Mini Cake"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Graduation cake"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
