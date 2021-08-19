import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const axios = require("axios").default;

const UpdateMyQuestion = (props) => {

  const { id } = useParams();

  const [title, setTitle] = useState();
  const [topic, setTopic] = useState();
  const [content, setContent] = useState();


  const inputContentRef = useRef();

  useEffect(() => {
    const foundQuestionToEdit = props.edit.find((question) => question._id === id);

    if(foundQuestionToEdit && id) {
      console.log(foundQuestionToEdit);
      setTopic(foundQuestionToEdit.topic)
      setTitle(foundQuestionToEdit.title);
      setContent(foundQuestionToEdit.content);
    }
  }, [id, props.edit])

  const handleBody = (data) => {
    setContent(data)};

  const updateQuestion = async (topic,title, content) => {
    var data = { topic, title, content };

    try{
      axios.put(`http://localhost:3001/forum/${id}` , data)
      .then((response) => {
        props.sendQuestionsGetRequest();
        window.location.replace("/profile");
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="writeBlogSection">
      <div className="container">
        <form>
          <h1 className="pt-5">
            Welcome{" "}
            {localStorage.getItem("user") &&
              JSON.parse(localStorage.getItem("user")).firstName}
          </h1>

          <div className="form-group">
            <label htmlFor="inputTopic">Topic</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              className="border border-dark"
              placeholder="write something amazing..."
              modules={UpdateMyQuestion.modules}
              formats={UpdateMyQuestion.formats}
              onChange={handleBody}
              id="inputContent"
            />
          </div>
          <button
          onClick = {() => {
            updateQuestion(topic, title, content);
          }}
           className="btn mt-5 postButton">
            <h3>Save</h3>
          </button>
        </form>
      </div>
    </section>
  );
};

UpdateMyQuestion.modules = {
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
UpdateMyQuestion.formats = [
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

export default UpdateMyQuestion;
