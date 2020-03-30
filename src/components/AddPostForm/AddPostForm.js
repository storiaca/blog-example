import React from "react";

import classes from "./AddPostForm.module.css";
const AddPostForm = () => {
  return (
    <div className={classes.FormWrap}>
      <form action="">
        <div className={classes.FormInput}>
          <label htmlFor="titlePost">Title</label>
          <input type="text" name="titlePost" id="titlePost" />
          <span>*</span>
        </div>
        <div className={classes.FormInput}>
          <label htmlFor="textPost">Text</label>
          <textarea name="textPost" rows="10" id="textPost"></textarea>
          <span>*</span>
        </div>
        <div className={classes.FormButtons}>
          <button>Post</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
