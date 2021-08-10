import React, { useRef } from "react";
import { Container, Form } from "react-bootstrap";
const axios = require("axios").default;

const Register = (props) => {
  const userNameRef = useRef();
  const classNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const addUser = async () => {
    try {
      console.log("add user");
      const resp = await axios.post("http://localhost:3001/users", {
        userName: userNameRef.current.value,
        className: classNameRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      props.sendUserGetRequest();
      console.log(resp.data);
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("user", JSON.stringify(resp.data.user));

      window.location.replace("/userprofile");
      userNameRef.current.value = "";
      classNameRef.current.value = "";
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="register-container">
      <h3 className="text-center pacifico-font">Create an account</h3>
      <Form>
        <Form.Group controlId="formBasicUserName">
          <Form.Label className="m-3">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your user name"
            ref={userNameRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicClassName">
          <Form.Label className="m-3">Class Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your class name"
            ref={classNameRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label className="m-3">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            ref={firstNameRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label className="m-3">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            ref={lastNameRef}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="m-3">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="m-3">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your Password"
            ref={passwordRef}
          />
        </Form.Group>

        <div className="text-center mt-5">
          <button type="button" className="pacifico-font" onClick={addUser}>
            Register
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
