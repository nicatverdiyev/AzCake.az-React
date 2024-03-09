import React from "react";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

import "../Navigation/navigation.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <input
          type="text"
          className="searc-input"
          placeholder="Enter your search cake"
        />
      </div>

      <div className="profile-container flex">
        <a href="#">
          <MdFavoriteBorder className="nav-icons" />
        </a>

        <a href="">
          <FiShoppingCart className="nav-icons" />
        </a>

        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
