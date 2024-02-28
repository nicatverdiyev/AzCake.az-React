import React from "react";
import "../Price/price.css";
import Input from "../../Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} name="test2" value="" />
        <span className="checkmark"></span>All
      </label>

      <Input handleChange={handleChange} value={50} title="0-50" name="test2" />
      <Input handleChange={handleChange} value={50} title="0-50" name="test2" />
      <Input handleChange={handleChange} value={50} title="0-50" name="test2" />
      <Input handleChange={handleChange} value={50} title="0-50" name="test2" />
      {/* <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>0 ₼- 20₼
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>20₼ - 50₼
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>50₼ - 70₼
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>70₼ - 100₼
      </label> */}
    </div>
  );
}

export default Price;
