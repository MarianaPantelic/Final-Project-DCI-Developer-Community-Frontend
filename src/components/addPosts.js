import React, { useRef, useState } from 'react';
import ReactQuill from "react-quill";
import { useHistory } from 'react-router-dom';

const axios = require("axios").default;



const AddPosts = (props) => {

  const [title, setTitle] = useState("");
    const [errors, setErrors] = useState("");

  let history = useHistory();

  const inputTitleRef = useRef();
  const inputContentRef = useRef();

  const handleBody = (e) => {
    console.log(e);
    inputContentRef.current.value = e;
  };

  const addPost = async (postTitle, postContent) => {
    console.log("add post log" + postContent);
    // TODO
    let userName = localStorage.getItem("user")
    try {
      const response = await axios.post(
        "http://localhost:3001/blogs/",
        {
          title: postTitle,
          content: postContent,
        },
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      console.log(localStorage.getItem("token"))
      await props.sendGetRequest({ title });
      console.log("response is :" + JSON.stringify(response));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

    console.log("user" + localStorage.getItem("user"));

    const addPostsOnClick = async () => {
      // console.log(inputContentRef.current);
      
    try {
      await addPost(inputTitleRef.current.value, inputContentRef.current.value);
      setTitle("");
      history.push("/blog");
    } catch (error) {
      console.log("U need to sign in" + error);
      if (!localStorage.getItem("token")) {
        alert("Please sign in to write post");
        window.location.replace("/");
      }
      setErrors(error.response.data);
    }
      //  setContent("");
    };


  return (
    <section className="writeBlogSection">
      <div className="container">
        <div className="row">
            <form>
              <h1 className="welcomAddPost">
                Welcome{" "}
                {localStorage.getItem("user") &&
                  JSON.parse(localStorage.getItem("user")).firstName}
              </h1>
              <div className="form-group">
                <label htmlFor="inputTitle">Title</label>
                <input
                  ref={inputTitleRef}
                  type="text"
                  className="form-control border border-dark"
                  id="inputTitle"
                  border
                  border-dark
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputContent">Content</label>
                <ReactQuill
                  className="border border-dark"
                  placeholder="write something amazing..."
                  modules={AddPosts.modules}
                  formats={AddPosts.formats}
                  onChange={handleBody}
                  id="inputContent"
                  ref={inputContentRef}
                />
              </div>
              <button
                onClick={() => addPostsOnClick()}
                type="button"
                className="btn mt-5 postButton"
              >
                <h3>Save</h3>
              </button>
            </form>
          </div>
        </div>
    </section>
  );
};

AddPosts.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    
  ],
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddPosts.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/*
 * PropType validation
 */


export default AddPosts;