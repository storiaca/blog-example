import React, { useState, useEffect } from "react";

import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.SidebarMain}>
      <h2>Blog categories</h2>
      <ul>
        <li>
          <a href="/#">Category 1</a>
        </li>
        <li>
          <a href="/#">Category 2</a>
        </li>
        <li>
          <a href="/#">Category 3</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
