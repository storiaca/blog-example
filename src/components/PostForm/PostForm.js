import React from "react";

import classes from "./PostForm.module.css";
const PostForm = () => {
  return (
    <div>
      <h2>Post Form</h2>
      <form action="">
        <div className="FormInput">
          <label htmlFor="titlePost">Title</label>
          <input type="text" name="titlePost" />
        </div>
        <div className="FormInput">
          <label htmlFor="textPost">Text</label>
          <textarea name="textPost" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
