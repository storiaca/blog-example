import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Sidebar.module.css";

const Sidebar = ({ postCategory }) => {
  const [data, setData] = useState({ resultData: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://frontend-api-test-nultien.azurewebsites.net/api/Category"
      );
      setData(result.data);
    };
    fetchData();
  }, [postCategory]);

  return (
    <div className={classes.SidebarMain}>
      <h2>Blog categories</h2>
      <ul>
        {data.resultData.map(item => (
          <li key={item.id}>
            <a href="/#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
