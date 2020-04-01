import React from "react";

import classes from "./EditPostForm.module.css";

const EditPostForm = ({ hide }) => {
  // const [post, setPost] = useState(data.resultData);

  // const handleInputChange = event => {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   setPost([{ ...post, [name]: value }]);
  // };

  return (
    <div className={classes.FormWrap}>
      <form>
        <div className={classes.FormInput}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            // value={data.resultData.title}
            // onChange={handleInputChange}
          />
        </div>
        <div className={classes.FormInput}>
          <label htmlFor="text">Text</label>
          <textarea
            name="text"
            rows="10"
            id="text"
            // value={post.text}
            // onChange={handleInputChange}
          ></textarea>
        </div>
        <div className={classes.FormButtons}>
          <button
          // onClick={() => {
          //   editPost(data);
          // }}
          >
            Edit
          </button>
          <button onClick={hide}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
