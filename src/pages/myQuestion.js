import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const axios = require("axios").default;

const MyQuestion = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/forum/${id}`);
      console.log(response.data);
      setQuestion(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(question);
  return (
    <Container>
      <Col sm={12} md={12} lg={8} className="question-container">
        {question ? (
          <div>
            <div className=" float-left topic">{question.topic}</div>
            <div className="question-section">
              <h1 className=" text-center">{question.title}</h1>

              <div
                className="mt-5 text-center"
                dangerouslySetInnerHTML={{
                  __html: question.content,
                }}
              ></div>
            </div>
            <div className="float-right mt-2">
              {question && question.answer && question.answer.length !== 0
                ? question.answer.length
                : 0}{" "}
              answers
            </div>

            <div className="answers-section">
              <ul>
                {question.answer && question.answer.length !== 0
                  ? question.answer.map((element) => (
                      <div>
                        <h2>Answers</h2>
                        <li>{element}</li>
                      </div>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        ) : null}

        <div className="d-flex justify-content-around justify-content-center btn-container">
          <Link to={`/updateMyQuestion/${id}`}>
            <Button className="register-btn">Update</Button>
          </Link>

          <Button className="register-btn">Delete</Button>
        </div>
      </Col>
    </Container>
  );
};

export default MyQuestion;
