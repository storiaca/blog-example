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
  //const [postCategory, setPostCategory] = useState([]);

  const addPostHandler = post => {
    //console.log(post);
    //const { categoryId } = post;
    axios
      .post(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts",
        post
      )
      .then(res => {
        setPostContent(prevPost => [...prevPost, { id: res.id, ...post }]);
      })
      .catch(error => console.log(error));

    // axios
    //   .post(
    //     "https://frontend-api-test-nultien.azurewebsites.net/api/Category",
    //     {
    //       id: categoryId,
    //       name: "Category 1"
    //     }
    //   )
    //   .then(res => {
    //     console.log(res);
    //     setPostCategory(prevPost => [
    //       ...prevPost,
    //       { id: res.id, name: res.name }
    //     ]);
    //   })
    //   .catch(error => console.log(error));
  };

  const removePostHandler = postId => {
    axios
      .delete(
        `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${postId}`
      )
      .then(res => {
        setPostContent(prevPosts => {
          prevPosts.filter(item => item.id !== postId);
        });
      })
      .catch(err => console.log(err));
  };

  // const editPostHandler = postId => {
  //   axios
  //     .put(
  //       `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${postId}`
  //     )
  //     .then(res => {
  //       setPostContent(prevPost => [...prevPost, { id: res.id, ...post }]);
  //     })
  //     .catch(error => console.log(error));
  // };

  //console.log("postContent", postContent);
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
        <Post postContent={postContent} onRemovePost={removePostHandler} />
        <Modal title={"Add Blog Post"} isShowing={isShowing} hide={toggle}>
          <AddPostForm hide={toggle} onAddPost={addPostHandler} />
        </Modal>
      </div>
    </div>
  );
};

export default Blog;
