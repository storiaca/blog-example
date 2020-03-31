import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Post.module.css";

// https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts

const Post = ({ postContent }) => {
  const [data, setData] = useState({ resultData: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className={classes.PostMain}>
      {data.resultData.map(item => (
        <div className={classes.SinglePost} key={item.id}>
          <div className={classes.SinglePostHeader}>
            <div className={classes.SinglePostInfo}>
              <div className={classes.SinglePostImage}></div>
              <div className={classes.SingePostTitle}>
                <h2>{item.title}</h2>
                <p>Posted date: {item.createdAt} at 12 by Some person</p>
              </div>
            </div>

            <div className={classes.SinglePostButtons}>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>

          <div className={classes.BlogSingleText}>
            <p>{item.text}</p>
          </div>
          <div className={classes.SinglePostThumb}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
