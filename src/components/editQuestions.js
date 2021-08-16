import React, { useEffect, useState } from "react";
import baseUrl from "../baseurl";

import "../css/style.css";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
const axios = require("axios").default;

const EditQuestions= (props) => {
  const [userSignup, setUserSignup] = useState({});
  const [userWriteQuestionSignIn, setUserWriteQuestionSignIn] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  const myStorage = window.localStorage;

  const [signUp, setsignUp] = useState(false);
  const handleCloseSignUp = () => setsignUp(false);
  const handlesignUp = () => setsignUp(true);

  const [writeForumSignIn, setwriteForumSignIn] = useState(false);
  const handleClosewriteForumSignIn = () => setwriteForumSignIn(false);
  const handlewriteForumSignIn = () => setwriteForumSignIn(true);

  const handleChangeSignup = (evt) => {
    setUserSignup({
      ...userSignup,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleChangewriteForumSignIn = (evt) => {
    setUserWriteQuestionSignIn({
      ...userWriteQuestionSignIn,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitSignup = async () => {
    try {
      await axios
        .post("http://localhost:3001/register", userSignup)
        .then((response) => {
          myStorage.setItem("token", response.headers.auth);
          myStorage.setItem("user", JSON.stringify(response.data));
          console.log("signup" + response.data.firstName);
        });
      window.location.replace("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const submitwriteForumSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        {
          email: userWriteQuestionSignIn.email,
          password: userWriteQuestionSignIn.password,
        }
      );
      myStorage.setItem("token", response.headers.auth);
      myStorage.setItem("user", JSON.stringify(response.data));

      console.log(response);

      window.location.replace("/addQuestions");

      console.log(userWriteQuestionSignIn);
    } catch (error) {
      console.log(error.response);
    }
  };

  const { id } = useParams();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    const foundQuestionToEdit = props.edit.find((question) => question._id === id);

    if (foundQuestionToEdit && id) {
      console.log(foundQuestionToEdit);
      setTitle(foundQuestionToEdit.title);
      setContent(foundQuestionToEdit.content);
    }
  }, [id, props.edit]);

  const handleBody = (data) => {
    setContent(data);
  };

  const updateQuestions = async (title, content) => {
    var data = { title, content };
    try {
      axios
        .put(`http://localhost:3001/questions/${id}`, data, {
          headers: {
            auth: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          props.sendGetRequest();
          response.data === "noauth"
            ? alert("Not authorize to update others post")
            : window.location.replace("/showPosts");
        });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };

  return (
    <section className="section-1 addPost">
      <div className="main-container">
        <div className="navbar">
          <nav className="nav-list">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/showQuestions" className="nav-link">
              Questions
            </Link>
            {localStorage.getItem("token") ? (
              <Link to="/addQuestions" className="nav-link">
                Ask a Question
              </Link>
            ) : (
              <button onClick={handlewriteForumSignIn} className="nav-link">
               Welcome to DCI Devs Forum
              </button>
            )}
          </nav>
        </div>

        <div className="blog-form">
          <form>
            <div className="form-group">
              <label for="inputTitle">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control border border-dark"
                id="inputTitle"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputContent">Content</label>
              <ReactQuill
                value={content}
                className="border border-dark"
                placeholder="write something amazing..."
                modules={EditQuestions.modules}
                formats={EditQuestions.formats}
                onChange={handleBody}
                id="inputContent"
              />
            </div>

            <button
              onClick={() => {
                updateQuestions(title, content);
              }}
              type="button"
              className="btn btn-primary mt-5"
            >
              <h3>Save</h3>
            </button>
          </form>
        </div>
        {/* Modal for sign up */}
        <Modal
          show={signUp}
          onHide={handleCloseSignUp}
          backdrop="static"
          keyboard={false}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="firstName" className="labelClass">
              First Name:
            </label>
            <input
              className="inputClass"
              id="firstName"
              name="firstName"
              placeholder="enter your first name"
              onChange={handleChangeSignup}
            />

            <label htmlFor="email" className="labelClass">
              Email:
            </label>
            <input
              className="inputClass"
              id="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChangeSignup}
            />
            <label htmlFor="password" className="labelClass">
              Password:
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              className="inputClass"
              id="password"
              name="password"
              placeholder="enter your password"
              onChange={handleChangeSignup}
            />
            {/* <i class="fas fa-eye-slash"></i> */}
            <label htmlFor="password" className="labelClass">
              Confirm Password:
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              name="confirmPassword"
              id="password"
              className="inputClass"
              placeholder="confirm password"
              onChange={handleChangeSignup}
            />
            {/* <button onClick={togglePassword}>Show Password</button> */}
            <Button className="mt-5 modalButton" onClick={submitSignup}>
              Sign up
            </Button>
          </Modal.Body>

          <Modal.Footer>
            <p className="modalP">Already have an account?</p>
            <Button
              className="modalButton"
              variant="primary"
              onClick={handleChangewriteForumSignIn}
            >
              Sign in here
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={writeForumSignIn}
          onHide={handleClosewriteForumSignIn}
          backdrop="static"
          keyboard={false}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle mb-4">Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <label htmlFor="email" className="labelClass">
              Email:
            </label>
            <input
              className="inputClass"
              id="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChangewriteForumSignIn}
            />
            <label htmlFor="password" className="labelClass">
              Password:
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              className="inputClass"
              id="password"
              name="password"
              placeholder="enter your password"
              onChange={handleChangewriteForumSignIn}
            />
            <Button
              to="/addPosts"
              variant="primary"
              className="modalButton"
              style={{ marginRight: "auto" }}
              onClick={submitwriteForumSignIn}
            >
              Sign In
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <p className="modalP">Do not have an account?</p>
            <Button
              className="modalButton"
              variant="primary"
              onClick={handlesignUp}
            >
              Sign up here
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="imagesAddPost">
          <img src="../images/bg-post.jpg" />
        </div>
      </div>
    </section>
  );
};

EditQuestions.modules = {
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
EditQuestions.formats = [
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

export default EditQuestions;
