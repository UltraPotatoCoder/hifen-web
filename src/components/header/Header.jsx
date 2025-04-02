import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/bites">Bites</Link>
          </li>
          <li>
            <Link to="/drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
