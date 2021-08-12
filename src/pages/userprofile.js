import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileImage from "@daym3l/react-profile-image";
const axios = require("axios").default;

const UserProfile = (props) => {
  const [user, setUser] = useState([]);
  const [agenda, setAgenda] = useState({});
  const userLocal = JSON.parse(localStorage.getItem("user"));
  let userId = "";

  if (userLocal) {
    userId = userLocal._id;
  }
  console.log(userId);

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getDailyAgenda();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getImages = async (base64Image, fileImage) => {
    // Do something with the selected image)
    try {
      await axios
        .put(`http://localhost:3001/users/${userId}`, {
          image: base64Image,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => props.sendUserGetRequest());

      console.log(user.image);
    } catch (error) {
      console.log(error);
    }
    console.log(base64Image);
    console.log(fileImage);
  };

  var today = new Date();
  var date =
    today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
  console.log(date);

  const getDailyAgenda = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/agenda/${date}`);
      setAgenda(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div className="first-clip"></div>
        <div className="second-clip"></div>
        <div className="third-clip"></div>
      </div>
      <Container className="profile-container">
        <Row>
          <Col sm={12} md={12} lg={6}>
            <div className="user-info-container">
              <div className="user-image-container">
                {user.image ? (
                  <div className="myImg">
                    <img src={user.image}></img>
                  </div>
                ) : (
                  <ProfileImage
                    className="mt-5"
                    camera
                    returnImage={getImages}
                    uploadBtnProps={{ variant: "contained", label: "Up" }}
                  />
                )}
              </div>
              <div className="info-container mt-3">
                {user ? (
                  <div>
                    <div>Username: {user.userName}</div>
                    <div>First Name: {user.firstName}</div>
                    <div>Last Name: {user.lastName}</div>
                    <div>Class: {user.className}</div>
                    <div>Email: {user.email}</div>
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className="agenda-container">
              <h2>Daily Agenda</h2>
              <div></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <div className="myQuestions-container"></div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <div className="myBlogs-container"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
