import React from "react";

import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.HeaderBlog}>
      <nav className={classes.HeaderNav}>
        <div className={classes.HeaderNavLogo}>
          <a href="/#">My Blog</a>
        </div>
        <div className={classes.HeaderRight}>
          <div className={classes.HeaderSearch}>
            <input type="text" name="search" id="search" placeholder="Search" />
          </div>
          <div className={classes.HeaderNavLinks}>
            <button>Open</button>
            <ul className={classes.HeaderNavMenu}>
              <li>
                <a href="/#">Link 1</a>
              </li>
              <li>
                <a href="/#">Link 2</a>
              </li>
              <li>
                <a href="/#">Link 3</a>
              </li>
              <li>
                <a href="/#">My profile</a>
              </li>
              <li>
                <a href="/#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
