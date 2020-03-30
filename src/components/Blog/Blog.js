import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

import Modal from "../Modal/Modal";
import useModal from "../../hooks/useModal";

import classes from "./Blog.module.css";
import PostForm from "../PostForm/PostForm";

function Blog() {
  //const [closeModal, setCloseModal] = useState(true);

  const { isShowing, toggle } = useModal();

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
        <Post />
        <Modal title={"Add Blog Post"} isShowing={isShowing} hide={toggle}>
          <PostForm />
        </Modal>
      </div>
    </div>
  );
}

export default Blog;
