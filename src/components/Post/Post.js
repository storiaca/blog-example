import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";

import useModal from "../../hooks/useModal";

import EditPostForm from "../EditPostForm/EditPostForm";
import Modal from "../Modal/Modal";

import classes from "./Post.module.css";

// https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts

const Post = ({ postContent, onRemovePost }) => {
  const { isShowing, toggle } = useModal();
  const [data, setData] = useState({ resultData: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts"
      );
      setData(result.data);
    };
    fetchData();
  }, [postContent]);

  const handleEditPost = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setData([{ ...data, ...data.resultData[0], [name]: value }]);
    // hide();
  };

  // const editPostHandler = (post, postId) => {
  //   axios
  //     .put(
  //       `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${postId}`
  //     )
  //     .then(res => {
  //       setEditPost(prevPost => [...prevPost, { id: res.postId, ...post }]);
  //     })
  //     .catch(error => console.log(error));
  // };

  return (
    <div className={classes.PostMain}>
      {data.resultData.map(item => (
        <div className={classes.SinglePost} key={item.id}>
          <div className={classes.SinglePostHeader}>
            <div className={classes.SinglePostInfo}>
              <div className={classes.SinglePostImage}></div>
              <div className={classes.SingePostTitle}>
                <h2>{item.title}</h2>
                <p>
                  Posted date:
                  <Moment format="YYYY.MM.DD">{item.createdAt}</Moment> at{" "}
                  <Moment format="HH:mm">{item.createdAt}</Moment> by Some
                  person
                </p>
              </div>
            </div>

            <div className={classes.SinglePostButtons}>
              <button onClick={toggle}>Edit</button>
              <button onClick={onRemovePost.bind(this, item.id)}>Delete</button>
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
      <Modal title={"Edit Blog Post"} isShowing={isShowing} hide={toggle}>
        <EditPostForm data={data.resultData} onChange={handleEditPost} />
      </Modal>
    </div>
  );
};

export default Post;
