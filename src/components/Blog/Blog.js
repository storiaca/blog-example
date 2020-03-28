import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";
import classes from "./Blog.module.css";

function Blog() {
  return (
    <div className={classes.BlogMain}>
      <div className="BlogMessages">
        <h1>Welcome to my blog</h1>
        <div className="BlogMessageContent">
          <span>
            <a href="/#">X</a>
          </span>
          <p>Container for showing applicatin messages</p>
        </div>
        <div className="BtnAddPost">
          <button type="submit">Add post</button>
        </div>
      </div>
      <div className="BlogMain">
        <Sidebar />
        <Post />
      </div>
    </div>
  );
}

export default Blog;
