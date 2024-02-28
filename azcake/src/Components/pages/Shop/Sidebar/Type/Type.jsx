import React from "react";
import "../Type/type.css";
import Input from "../../Input";

function Type({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title type-title">Type</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        {/* <span className="checkmark"></span>All */}
      </label>

      <Input
        handleChange={handleChange}
        value="flats"
        title="Breakfast"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="lunch"
        title="Lunch"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="salad"
        title="Salads"
        name="test"
      />
    </div>
  );
}

export default Type;
