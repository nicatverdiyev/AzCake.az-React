import React from "react";
import "../Navbar/Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="sign-up">
      <button className="butn">Sign Up</button>
    </Link>
  );
}
