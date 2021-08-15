import  React from "react";
import { Container } from "react-bootstrap";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Link } from "react-router-dom";


const axios = require("axios").default;

const Forum = (props) => {
  let contentHTML = null;
  
  return (
    <Container className="mt-5">
      {/* <div className="text-center">
        <Link to="/addQuestions">
          <button type="button" className="m-5 askQuestion-btn">
            Ask Question
          </button>
        </Link>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12  main-question-div">
        <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center question-div">
          <Link to="/showQuestion">
            <h2>Can’t confirm if mongoose is connected with Atlas or not</h2>
          </Link>
        </div>
        <div className="topic-div">
          <a href="https://www.javascript.com/">
            <span>JavaScript</span>
          </a>
        </div>
      </div> */}
      <div class="input-group searchbar">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
      ;
      <div className="blog-container d-flex flex-wrap justify-content-center ">
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
      </div>
    </Container>
  );
};

export default Forum;
