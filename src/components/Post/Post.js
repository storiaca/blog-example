import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Post.module.css";

function Post() {
  // const { post, setPost } = useState();

  return (
    <div className={classes.PostMain}>
      <div className={classes.SinglePost}>
        <div className={classes.SinglePostHeader}>
          <div className={classes.SinglePostInfo}>
            <div className={classes.SinglePostImage}></div>
            <div className={classes.SingePostTitle}>
              <h2>Blog Post 1</h2>
              <p>Posted date: 12.12.2019 at 12 by Some person</p>
            </div>
          </div>

          <div className={classes.SinglePostButtons}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>

        <div className={classes.BlogSingleText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={classes.SinglePostThumb}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
