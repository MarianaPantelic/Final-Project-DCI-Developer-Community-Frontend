import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";

const ShowQuestion = (props) => {

  const { id } = useParams();

  const [answer,setAnswer] = useState();

  const inputContentRef = useRef();

  const foundQuestion = props.showQuestionDetails.find(
    (question) => id == question._id
  );
  console.log("question" + foundQuestion);

  const handleBody = (e) => {
    console.log(e);
    inputContentRef.current.value = e;
  };


  return (
    <div className="container showQuestionDetails-container">
      {foundQuestion ? (
        <>
          <div className="card showQuestionDetails-cards p-3">
            <div className="card-header showQuestionDetails-header pt-2 pb-2">
              {" "}
              {foundQuestion.user ? foundQuestion.user.firstName : ""}
            </div>
            <div className="card-body">
              <h5 className="card-title showQuestionDetails-title">
                {foundQuestion.title}
              </h5>
              <p
                className="card-text showQuestionDetails-content"
                dangerouslySetInnerHTML={{
                  __html: foundQuestion.content,
                }}
              ></p>
            </div>
          </div>
        </>
      ) : (
        "Question content not found"
      )}
      <h1 className="mb-5">Your Answer</h1>
      <form className="form-container">
        <div className="form-group">
          <ReactQuill
            className="border border-dark"
            placeholder="write something amazing..."
            modules={ShowQuestion.modules}
            formats={ShowQuestion.formats}
            onChange={handleBody}
            id="inputContent"
            ref={inputContentRef}
          />
        </div>
      </form>
      <button type="button" className="btn btn-warning p-3 submit-button">
        Submit
      </button>{" "}
    </div>
  );
};

ShowQuestion.modules = {
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
ShowQuestion.formats = [
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


export default ShowQuestion;
