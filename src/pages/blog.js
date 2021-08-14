import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
const axios = require("axios").default;



const Blog = (props) => {

//    How to check if a post is already liked
//  1. get the array of likes already stored in localstorage
//   try {
//   let likes = localStorage.getItem("postsAlreadyLikedByUser");
//  } catch (error) {
//   TODO Handle Errors
//  }//
//  // 2. TODO iterate through the array and look for the post id
//  if (...){
//   TODO reject in case the post id is in the array
//  }//

//  /*
//  how to 
//  add a post to localstorage
//  */
//  1. get the array of likes already stored in localstorage
//   try {
//     let likes = localStorage.getItem("postsAlreadyLikedByUser");
//    } catch (error) {
//     TODO Handle Errors
//    }//
//  2. TODO: Overwrite the object in localstorage with the new post id
//   localStorage.setItem("postsAlreadyLikedByUser", likes);
  // const increaseLikes = async (id) => {
  //   const foundPost = props.show.find((post) => post._id === id);
  //   console.log(foundPost.likes);
  //   try {
  //     axios
  //       .put(`http://localhost:3001/blogs/${id}`, {
  //         likes: foundPost.likes + 1,
  //       })
  //       .then((resp) => props.sendGetRequest());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <section className="showPostsSection">
      <div className="container">
        <Link to="/addPosts" className="link_addPost">
         <div className="text-center">
            <button className="btn btn-warning newPostButton" type="button">
              Write a new post
            </button>
          </div>
        </Link>
      </div>
      <div className="container blogs-container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {props.show.length < 1 ? (
              <h2 className="blogs">No Blogs Yet</h2>
            ) : (
              <Container>
                <Row className="mt-5">
                  {props.show.map((post, index) => (
                    <Col lg={6} md={6} sm={12}>
                      <Card className="blogCards">
                        <Card.Body>
                          <Card.Title className="blogUser">
                            {post.user.firstName}
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
                              onClick={() => {
                                localStorage.setItem(
                                  "postsAlreadyLiked",
                                  post._id
                                );
                              }}
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
