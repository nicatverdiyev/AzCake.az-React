import React from "react";
import "../Recommended/recommended.css";

function Recommended() {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">All Products</button>
        <button className="btns">Ready cake</button>
        <button className="btns">Cheescake</button>
        <button className="btns">Food</button>
        <button className="btns">Giftbox</button>
      </div>
    </div>
  );
}

export default Recommended;
