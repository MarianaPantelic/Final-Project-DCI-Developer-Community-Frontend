import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <div className="row mt-5 about1strow mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12 aboutCol about-Text">
          <h1 className="fw-bold">About Us</h1>
          <h2 className="mt-4 mb-3">Who We Are?</h2>
          <p className="mt-5 mb-5">
            We are WebDevelopment students in DCI , working together in the
            final project . Our project idea is to help DCI students to have all
            the information about this course in one webpage
          </p>
          <p>
            The idea was coming after we sow our needs and we want to help the
            next students to have more structured information in the same place.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 about1strowImg">
          <div className="row d-flex justify-content-between pt-3">
            <div className="col-lg-4 col-md-12 pictures">
              <div className="vertical-alignment">
                <div id="heriberto" className=" pictures"></div>
                <div className="text-center">
                  <h5>Heriberto</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pictures">
              <div className="vertical-alignment">
                <div id="heriberto" className=" pictures"></div>
                <div className="text-center">
                  <h5>Heriberto</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center pt-2 pb-5">
            <div className="col-lg-4 col-md-12 pictures">
              <div className="vertical-alignment">
                <div id="mariana" className=" pictures"></div>
                <div className="text-center">
                  <h5>Mariana</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between pt-2 pb-5">
            <div className="col-lg-4 col-md-12 pictures">
              <div className="vertical-alignment">
                <div id="heriberto" className=" pictures"></div>
                <div className="text-center">
                  <h5>Heriberto</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 pictures">
              <div className="vertical-alignment">
                <div id="florin" className=" pictures"></div>
                <div className="text-center">
                  <h5>Florin</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 about1strow mt-3">
        <div className="col-lg-6 col-md-6 col-sm-12 about1strowImg">
          <div className="row d-flex justify-content-between pt-3">
            <div className="col-lg-4 col-md-12 "></div>
            <div className="col-lg-4 col-md-12 "></div>
          </div>
          <div className="row d-flex justify-content-center mt-2 pt-2">
            <div className="col-lg-4 col-md-12 "></div>
          </div>
          <div className="row d-flex justify-content-between pt-2 pb-5">
            <div className="col-lg-4 col-md-12 "></div>
            <div className="col-lg-4 col-md-12 "></div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 aboutCol about-Text">
          <h2 className="mt-4 mb-3">What we offer?</h2>
          <p className="mt-5 mb-5">
            We are coming with a structured platform where all the students
            which are registered can have access to value information about web
            development as follows:
          </p>
          <li>
            in Forum page ,they can ask questions and receive answers about
            different topics related to web development; In Blog Page , they can
            see , write and like posts from the other users;
          </li>
          <li>
            inside Blog Page , they can see , write and like posts from the
            other users;
          </li>
          <li>News Page is offering information about programming world</li>
          <li>
            {" "}
            in Resources Page the students are able to find websites from where
            they can learn how to code{" "}
          </li>
          <li>
            Jobs page is offering information about jobs which are available in
            this domain
          </li>
        </div>
      </div>
    </Container>
  );
};

export default About;
