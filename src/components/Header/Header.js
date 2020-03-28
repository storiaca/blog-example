import React from "react";

import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.HeaderBlog}>
      <nav className={classes.HeaderNav}>
        <div className={classes.HeaderNavLogo}>
          <a href="#">My Blog</a>
        </div>
        <ul className={classes.HeaderNavMenu}>
          <input type="text" name="search" id="search" placeholder="Search" />

          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
          <li>
            <a href="#">My profile</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
