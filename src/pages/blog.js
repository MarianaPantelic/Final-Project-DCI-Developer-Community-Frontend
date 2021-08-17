import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
const axios = require("axios").default;

const Blog = (props) => {
  const increaseLikes = async (id) => {
    const foundPost = props.show.find((post) => post._id === id);
    let tempArray = foundPost.whoClicked;
    tempArray.push(foundPost.user.id);
    try {
      axios
        .put(`http://localhost:3001/blogs/${id}`, {
          likes: foundPost.likes + 1,
          clicked: true,
          whoClicked: tempArray,
        })
        .then((resp) => props.sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="showPostsSection">
      <div className="container">
        {localStorage.getItem("token") ? (
          <Link to="/addPosts" className="link_addPost">
            <div className="text-center">
              <button className="btn btn-warning newPostButton" type="button">
                Write a new post
              </button>
            </div>
          </Link>
        ) : (
          <Link to="/login" className="link_addPost">
            <div className="text-center">
              <button className="btn btn-warning newPostButton" type="button">
                Write a new post
              </button>
            </div>
          </Link>
        )}
      </div>
      <div className="container blogs-container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {props.show.length < 1 ? (
              <h2 className="blogs">No Blogs Yet</h2>
            ) : (
              <Container>
                <Row className="mt-5">
                  {props.show.reverse().map((post, index) => (
                    <Col lg={6} md={6} sm={12}>
                      <Card className="blogCards">
                        <Card.Body>
                          <Card.Title className="blogUser">
                            {post.user ? post.user.firstName : ""}
                            {/* {post.user.firstName} */}
                          </Card.Title>
                          <Card.Subtitle className="blogTitle">
                            {post.title}
                          </Card.Subtitle>
                          <Card.Text className="blogContent">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: post.content,
                              }}
                              className="card-text"
                            ></p>
                          </Card.Text>
                          <Card.Footer>
                            <AiFillLike
                              onClick={() =>
                                post.whoClicked.find(
                                  (element) => element == post.user._id
                                )
                                  ? ""
                                  : increaseLikes(post._id)
                              }
                              className="likeButton"
                            />
                            <span className="likesNumber"> {post.likes} </span>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
