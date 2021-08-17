import React from "react";
import { useParams } from "react-router-dom";

const ShowQuestion = (props) => {
  return (
    <>
      <h1 style={{ marginTop: "10rem" }}>This is to show question</h1>
      <div>
        <h1>Answers</h1>
        {props.showQuestionDetails.map((question, index) => (
          <p
            dangerouslySetInnerHTML={{
              __html: question.content,
            }}
            className="card-text"
          ></p>
        ))}
      </div>
    </>
  );
};

export default ShowQuestion;
