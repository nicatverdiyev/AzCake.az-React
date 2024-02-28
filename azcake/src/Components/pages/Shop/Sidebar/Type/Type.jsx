import React from "react";
import "../Type/type.css";
import Input from "../../Input";

function Type({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title type-title">Type</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
    </div>
  );
}

export default Type;
