import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useHistory } from "react-router-dom";

const axios = require("axios").default;

const AddQuestions = (props) => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  let history = useHistory();

  const inputTitleRef = useRef();
  const inputContentRef = useRef();
  const inputTopicRef = useRef();

  const handleBody = (e) => {
    console.log(e);
    inputContentRef.current.value = e;
  };

  const addQuestion = async (questionTopic, questionTitle, questionContent) => {
    console.log("add post log" + questionContent);

    try {

      const response = await axios.post("http://localhost:3001/forum/", {
        topic: questionTopic,
        title: questionTitle,
        content: questionContent,
        user: JSON.parse(localStorage.getItem("user"))._id,
      },
                                        {
          headers: {
            auth: localStorage.getItem("token"),
          },
      }                                );

      await props.sendQuestionsGetRequest({ title });
      console.log("response is :" + JSON.stringify(response));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const AddQuestionsOnClick = async () => {
    // console.log(inputContentRef.current);
    try {
      await addQuestion(
        inputTopicRef.current.value,
        inputTitleRef.current.value,
        inputContentRef.current.value
      );
      setTopic("");
      setTitle("");
      history.push("/forum");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <section className="writeBlogSection">
      <div>
        <div className="clip-add-question"></div>
      </div>
      <div className="container write-container">
        <h1 className="pt-3">
          Welcome{" "}
          {localStorage.getItem("user") &&
            JSON.parse(localStorage.getItem("user")).firstName}
        </h1>
        <form>
          <div className="form-group mt-3">
            <label htmlFor="inputTopic">Topic</label>
            <input
              ref={inputTopicRef}
              type="text"
              className="form-control border border-dark"
              id="inputTopic"
              border
              border-dark
            />
          </div>
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
          <Link to="/forum">
            <button
              onClick={() => AddQuestionsOnClick()}
              type="button"
              className="btn mt-3 postButton"
            >
              <h3>Ask</h3>
            </button>
          </Link>
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
