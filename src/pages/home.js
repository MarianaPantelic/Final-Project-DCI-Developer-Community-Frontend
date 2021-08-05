import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="col home_para">
          <h1>Welcome to our community!</h1>
          <p>
            Join us and you will discover great people and interesting
            information about how to become a successful developer.{" "}
          </p>
          <button type="button" className="btn btn-warning">
            Register
          </button>
        </Col>
        <Col>
          <img
            className="home_heroimg"
            src="../images/welcome_HP.jpg"
            alt="hero image of programming"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="home_heroimg"
            src="../images/who_dci.png"
            alt="hero image of programming"
          />
        </Col>
        <Col className="col home_para">
          <h1>Why are we?</h1>
          <p>
            The Digital Career Institute was born as an initiative to integrate
            refugees into digital jobs. Today it is committed to train anyone
            who wants to pursue to tech career.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="col home_para">
          <h1>Why are we here?</h1>
          <p>
            Want to be a Freelancer, Digital Nomad, or work in your dream tech
            company? Become a Web Developer, a dynamic and vital field in
            today'S society. As a Web Developer you can show your creativity,
            become a part of the Tech Disruption, build websites, Web Apps and
            more.
          </p>
        </Col>
        <Col>
          <img
            className="home_heroimg"
            src="../images/why_r_v_here.png"
            alt="hero image of programming"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="home_heroimg"
            src="../images/why_join_dci.png"
            alt="hero image of programming"
          />
        </Col>
        <Col className="col home_para">
          <h1>Why should I join this community?</h1>
          <p>
            Want to be a Freelancer, Digital Nomad, or work in your dream tech
            company? Become a Web Developer, a dynamic and vital field in
            today'S society. As a Web Developer you can show your creativity,
            become a part of the Tech Disruption, build websites, Web Apps and
            more.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
