import React, { useState } from "react";

import classes from "./EditPostForm.module.css";

const EditPostForm = ({ hide, data }) => {
  const [post, setPost] = useState(data);

  const handleEditPost = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    hide();
  };

  console.log(post.title);
  return (
    <div className={classes.FormWrap}>
      <form>
        <div className={classes.FormInput}>
          <label htmlFor="titlePost">Title</label>
          <input
            type="text"
            name="titlePost"
            id="titlePost"
            value={post.title}
            onChange={handleEditPost}
          />
        </div>
        <div className={classes.FormInput}>
          <label htmlFor="textPost">Text</label>
          <textarea
            name="textPost"
            rows="10"
            id="textPost"
            value={post.text}
            onChange={handleEditPost}
          ></textarea>
        </div>
        <div className={classes.FormButtons}>
          <button type="submit">Edit</button>
          <button onClick={hide}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
