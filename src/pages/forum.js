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
      <div className="container question-cards-container">
        {props.show.map((question, index) => (
            <div key={index} class="card mt-5 question-cards">
              <div className="card-header pl-5 question-user">
                {question.user ? question.user.firstName : ""}
              </div>
              <div className="card-body">
                <blockquote class="blockquote mb-0 question-title">
                  <Link
                    to={`/showQuestion/${question._id}`}
                    className="question-link"
                  >
                    <p className="p-4">{question.title}</p>
                  </Link>
                  <footer className="p-4">
                    <div className="question-topic">
                      <p className="text-center">{question.topic}</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
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
