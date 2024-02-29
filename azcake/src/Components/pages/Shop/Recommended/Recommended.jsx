import React from "react";
import "../Recommended/recommended.css";
import Button from "../Button";

function Recommended({ handleClick }) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Cakes" />
        <Button
          onClickHandler={handleClick}
          value="sneakers"
          title="Ready Cake"
        />
        <Button
          onClickHandler={handleClick}
          value="sandals"
          title="Mini Cake"
        />
        <Button
          onClickHandler={handleClick}
          value="heels"
          title="Graduation cake"
        />
      </div>
    </div>
  );
}

export default Recommended;

// <button className="btns">Ready cake</button>
// <button className="btns">Cheescake</button>
// <button className="btns">Food</button>
// <button className="btns">Giftbox</button>
