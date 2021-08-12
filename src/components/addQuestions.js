import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useHistory } from "react-router-dom";

const axios = require("axios").default;

const AddQuestions = (props) => {
  const [title, setTitle] = useState("");
  let history = useHistory();

  const inputTitleRef = useRef();
  const inputContentRef = useRef();

  const handleBody = (e) => {
    console.log(e);
    inputContentRef.current.value = e;
  };

  const addQuestion = async (questionTitle, questionContent) => {
    console.log("add post log" + questionContent);
    
    try {
      const response = await axios.post("http://localhost:3001/forum/", {
        title: questionTitle,
        content: questionContent,
      });
      await props.sendGetRequest({ title });
      console.log("response is :" + JSON.stringify(response));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const AddQuestionsOnClick = async () => {
    // console.log(inputContentRef.current);
    try {
      await addQuestion(inputTitleRef.current.value, inputContentRef.current.value);
      setTitle("");
      history.push("/forum");
    } catch (error) {
      console.log("error");
    }
    //  setContent("");
  };

  return (
    <section className="writeBlogSection">
      <div className="container">
        <form>
          <h1 className="pt-5"> Welcome</h1>
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
              modules={AddQuestions.modules}
              formats={AddQuestions.formats}
              onChange={handleBody}
              id="inputContent"
              ref={inputContentRef}
            />
          </div>
          <button
            onClick={() => AddQuestionsOnClick()}
            type="button"
            className="btn mt-5 postButton"
          >
            <h3>Save</h3>
          </button>
        </form>
      </div>
    </section>
  );
};

AddQuestions.modules = {
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
AddQuestions.formats = [
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

export default AddQuestions;
