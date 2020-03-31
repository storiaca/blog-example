import React, { useState } from "react";

import classes from "./AddPostForm.module.css";
const AddPostForm = ({ hide, onAddPost }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submitPost = e => {
    e.preventDefault();
    onAddPost({ title, text: message });
    hide();
  };

  return (
    <div className={classes.FormWrap}>
      <form onSubmit={submitPost}>
        <div className={classes.FormInput}>
          <label htmlFor="titlePost">Title</label>
          <input
            type="text"
            name="titlePost"
            id="titlePost"
            placeholder="Tilte of the post"
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
          <span>*</span>
        </div>
        <div className={classes.FormInput}>
          <label htmlFor="textPost">Text</label>
          <textarea
            name="textPost"
            rows="10"
            id="textPost"
            placeholder="Text of the post"
            value={message}
            onChange={event => {
              setMessage(event.target.value);
            }}
          ></textarea>
          <span>*</span>
        </div>
        <div className={classes.FormButtons}>
          <button type="submit">Post</button>
          <button onClick={hide}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
