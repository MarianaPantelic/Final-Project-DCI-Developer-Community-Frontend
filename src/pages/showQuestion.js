import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";

const ShowQuestion = (props) => {
  const { id } = useParams();

  const [answer, setAnswer] = useState();

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
    <>
      <h1 style={{ marginTop: "10rem" }}>This is to show question</h1>
      <div>
        <h1>Answers</h1>

        {foundQuestion ? (
          <p
            dangerouslySetInnerHTML={{
              __html: foundQuestion.content,
            }}
          ></p>
        ) : (
          "Question content not found"
        )}

        {/* <p
            dangerouslySetInnerHTML={{
              __html: question.content,
            }} 
          ></p> */}
        <button
          //onClick={() => AddAnswerOnClick()}
          type="button"
          className="btn mt-5 ask_replyQuestion-btn "
        >
          <h3>Reply</h3>
        </button>
      </div>
    </>
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
