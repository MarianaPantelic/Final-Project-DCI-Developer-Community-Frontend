import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
const axios = require("axios");
const News = () => {
  const [news, setNews] = useState([]);
  const getArticles = () => {
    axios
      .get("http://localhost:3001/news/")
      .then(function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getArticles();
  }, []);
  console.log(news);
  return (
    <Container className="news-container">
      <div className="news-header-container">
        <h1>ARTICLES</h1>
      </div>

      {news.map((article, idx) => (
        <Card key={idx} className="article-card">
          <Card.Img variant="top" src={article.cover_image} />
          <Card.Body>
            <Card.Title style={{ fontSize: "2rem" }}>
              {article.title}
            </Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <Button
              size="lg"
              variant="primary"
              target="_blank"
              href={article.url}
            >
              read more
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Created at {article.readable_publish_date}
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default News;
