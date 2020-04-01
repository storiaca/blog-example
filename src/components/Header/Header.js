import React, { useState } from "react";

import classes from "./Header.module.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);

  let menuClasses = [classes.HeaderNavMenu, classes.Close];

  if (!openMenu) {
    menuClasses = [classes.HeaderNavMenu, classes.Open];
  }
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
            <div
              className={classes.MenuBars}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={menuClasses.join(" ")}>
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
};

export default Header;
