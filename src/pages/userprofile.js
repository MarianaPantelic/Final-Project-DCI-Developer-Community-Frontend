import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import ProfileImage from "@daym3l/react-profile-image";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const UserProfile = (props) => {
  const [user, setUser] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [dailyAgenda, setDailyAgenda] = useState([]);
  const [agendaByDate, setAgendaByDate] = useState([]);

  const userLocal = JSON.parse(localStorage.getItem("user"));
  let userId = "";

  if (userLocal) {
    userId = userLocal._id;
  }
  console.log(userId);

  const inputRef = useRef();
  console.log(inputRef);

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getAgenda();
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

  const getAgenda = async () => {
    try {
      const response = await axios.get("http://localhost:3001/agenda");
      console.log(response);
      setAgenda(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(agenda);

  const getDailyAgenda = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/agenda/${date}`);
      console.log(response);
      setDailyAgenda(response.data[0]);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(dailyAgenda);

  const getAgendaByDate = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/agenda/${inputRef.current.value}`
      );
      console.log(response);
      setAgendaByDate(response.data[0]);
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
      <div className="profile-container">
        <h1 className="text-center">Welcome back {user.firstName}!</h1>
        <Row>
          <Col sm={12} md={12} lg={3}>
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
                    <div className="mt-3 profile-user-name">
                      {user.userName}
                    </div>
                    <div className="mt-3">First Name: {user.firstName}</div>
                    <div>Last Name: {user.lastName}</div>
                    <div>Class: {user.className}</div>
                    <div>{user.email}</div>
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="agenda-container">
              <h2 className="text-center mt-5">Daily Agenda</h2>
              <div className="text-center mt-3">{dailyAgenda.date}</div>
              <h2 className="text-center mt-5">Topics</h2>

              {dailyAgenda.topics
                ? dailyAgenda.topics.map((topic) => (
                    <div className="mt-2 text-center">{topic}</div>
                  ))
                : null}
            </div>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <div className="search-container">
              <h2 className="text-center mt-5">Search Agenda</h2>
              <Form className="d-flex mt-3 search-form">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2 search-input"
                  aria-label="Search"
                  ref={inputRef}
                />
                <Button className="search-btn" onClick={getAgendaByDate}>
                  Search
                </Button>
              </Form>
              <div>
                {agendaByDate ? (
                  <div className="text-center mt-3">{agendaByDate.date}</div>
                ) : null}
                <h2 className="text-center mt-5">Topics</h2>
                <ol>
                  {agendaByDate && agendaByDate.topics
                    ? agendaByDate.topics.map((topic) => (
                        <li className="mt-2 ml-5">
                          {" "}
                          &nbsp;&nbsp;&nbsp;{topic}
                        </li>
                      ))
                    : null}
                </ol>
                <h2 className="text-center mt-5">Resources</h2>
                <ol>
                  {agendaByDate && agendaByDate.resources
                    ? agendaByDate.resources.map((resource) => (
                        <li className="mt-2 ml-5">
                          {" "}
                          <Link to={resource} target="_blank" />
                        </li>
                      ))
                    : null}
                </ol>
              </div>
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
      </div>
    </>
  );
};

export default UserProfile;
