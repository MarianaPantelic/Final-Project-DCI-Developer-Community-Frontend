import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <Container>
      <div className="row about1strow">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 aboutCol about-Text">
          <h1 className="fw-bold ml-4 mt-5">About Us</h1>
          <h2 className="m-4">Who We Are?</h2>
          <p className="m-4">
            We are Web Development Alumni from DCI, working together on our
            Final Project . The idea is to provide DCI students a place where
            they can have all the information about the course in one place.
          </p>
          <p className="m-4">
            The idea came after we discovered our needs and we wanted to help
            future students to have an easier journey achieving our common goal
            of becoming Web Developers.
          </p>
          <p className="m-4">
            We are coming with a structured platform where all the students
            which are registered can have access to value information about Web
            Development.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 about1strowImg1">
          <div className="row d-flex justify-content-around pt-3">
            <Zoom duration={1500}>
              <div className="col-lg-6 col-md-6 col-sm-12 pictures">
                <div id="mariana"></div>
                <div>
                  <h5>Mariana</h5>
                </div>
              </div>
            </Zoom>
            <Zoom duration={1500} delay={1500}>
              <div className="col-lg-6 col-md-6 col-sm-12 pictures">
                <div id="kinjal"></div>
                <div>
                  <h5>Kinjal</h5>
                </div>
              </div>
            </Zoom>
            <Zoom duration={1500} delay={3000}>
              <div className="col-lg-6 col-md-6 col-sm-12 pictures">
                <div id="sara"></div>
                <div>
                  <h5>Sara</h5>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="row d-flex justify-content-evenly pt-5">
            <Zoom duration={1500} delay={4500}>
              <div className="col-lg-6 col-md-6 col-sm-12 pictures">
                <div id="heriberto"></div>
                <div>
                  <h5>Heriberto</h5>
                </div>
              </div>
            </Zoom>
            <Zoom duration={1500} delay={6000}>
              <div className="col-lg-6 col-md-6 col-sm-12 pictures">
                <div id="florin"></div>
                <div className="text-center">
                  <h5>Florin</h5>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <div className="row about2strow">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 about1strowImg2">
          <div className="row d-flex">
            <div
              id="webdev-gif"
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
            ></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 aboutCol about-Text">
          <h2 className="m-4">What we offer?</h2>

          <ul className="m-4 list">
            <li>
              Forum Page is the place where students can ask questions and
              receive answers related to web development.
            </li>
            <li>
              Blog Page gives the chance to share interesting or funny posts
              related to Web Development.
            </li>
            <li>News Page is offering information about programming world.</li>
            <li>
              Resources Page is providing information about the most useful
              websites from where they can learn how to code.
            </li>
            <li>
              Jobs Page provides information about jobs which are available in
              this domain.
            </li>
            <li>
              User Profile Page shows information about the user, daily agenda
              with option to search by date, my questions and my posts with
              options to update and delete.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
