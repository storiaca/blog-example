import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

import Form from "../PostForm/PostForm";

import classes from "./Blog.module.css";
import PostForm from "../PostForm/PostForm";

function Blog() {
  return (
    <div className={classes.BlogMain}>
      <div></div>
      <div className={classes.BlogMessages}>
        <h1>Welcome to my blog</h1>
        <div className={classes.BlogMessageContent}>
          <span>
            <a href="/#">&times;</a>
          </span>
          <p>Container for showing application messages</p>
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
        <PostForm />
      </div>
    </div>
  );
}

export default Blog;
