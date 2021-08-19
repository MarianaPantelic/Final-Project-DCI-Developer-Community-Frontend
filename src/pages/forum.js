import React from "react";
import { Container } from "react-bootstrap";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Link } from "react-router-dom";

const axios = require("axios").default;

const Forum = (props) => {
  let contentHTML = null;
  console.log(props.show);

  return (
    <Container className="mt-5">
      <div className="text-center pt-5 pb-3">
        {localStorage.getItem("token") ? (
          <Link to="/addQuestions">
            <button type="button" className="ask_replyQuestion-btn">
              Ask Question
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button type="button" className="ask_replyQuestion-btn">
              Ask Question
            </button>
          </Link>
        )}
      </div>
      <div className="">
        {props.show.reverse().map((question, index) => (
          <>
            <p>{question.topic}</p>
            <Link to={`/showQuestion/${question._id}`}>
              <p>{question.title}</p>
            </Link>
          </>
        ))}
      </div>
      {/* <div className="blog-container d-flex flex-wrap justify-content-center ">
        {props.questions ? (
          props.questions.reverse().map((element) => {
            const converter = new QuillDeltaToHtmlConverter(
              element.content.ops,
              {}
            );
            contentHTML = converter.convert();
            return (
              <div className="post-box mt-5 col-lg-5 card d-flex">
                <h3 class="card-header">{element.title}</h3>
                <div class="card-body">
                  <p class="card-text">
                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{
                        __html: contentHTML,
                      }}
                    ></div>
                  </p>
                  <p className="pacifico-font">posted by: {element.user}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="loader">LOADING...</div>
        )}
      </div> */}
    </Container>
  );
};

export default Forum;
