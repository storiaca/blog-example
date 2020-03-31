import React, { useState } from "react";
import axios from "axios";

import useModal from "../../hooks/useModal";

import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

import Modal from "../Modal/Modal";

import AddPostForm from "../AddPostForm/AddPostForm";

import classes from "./Blog.module.css";

const Blog = () => {
  const { isShowing, toggle } = useModal();
  const [postContent, setPostContent] = useState([]);

  const addPostHandler = post => {
    axios
      .post(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts",
        post
      )
      .then(res => {
        setPostContent(prevPost => [...prevPost, { id: res.id, ...post }]);
      })
      .catch(error => console.log(error));
  };

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
          <button onClick={toggle}>Add post</button>
        </div>
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Post postContent={postContent} />
        <Modal title={"Add Blog Post"} isShowing={isShowing} hide={toggle}>
          <AddPostForm hide={toggle} onAddPost={addPostHandler} />
        </Modal>
      </div>
    </div>
  );
};

export default Blog;
