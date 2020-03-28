import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

import classes from "./Blog.module.css";

function Blog() {
  return (
    <div className={classes.BlogMain}>
      <div></div>
      <div className={classes.BlogMessages}>
        <h1>Welcome to my blog</h1>
        <div className={classes.BlogMessageContent}>
          <span>
            <a href="/#">X</a>
          </span>
          <p>Container for showing applicatin messages</p>
        </div>
        <div className={classes.BtnAddPost}>
          <button type="submit">Add post</button>
        </div>
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Blog;
