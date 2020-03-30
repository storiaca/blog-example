import React from "react";

import classes from "./PostForm.module.css";
const PostForm = () => {
  return (
    <div>
      <form action="">
        <div className={classes.FormInput}>
          <label htmlFor="titlePost">Title</label>
          <input type="text" name="titlePost" id="titlePost" />
        </div>
        <div className={classes.FormInput}>
          <label htmlFor="textPost">Text</label>
          <textarea name="textPost" rows="10" id="textPost"></textarea>
        </div>
        <div className={classes.FormButtons}>
          <button>Post</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
