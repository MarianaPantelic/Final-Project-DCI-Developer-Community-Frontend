import React, {  } from "react";
import { Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog";
import Forum from "./pages/forum";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Login from "./pages/login";
import News from "./pages/news";
import Post from "./pages/post";
import Register from "./pages/register";
import Resources from "./pages/resources";
import UserProfile from "./pages/userprofile";

import "./main.css";

const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
      </Router>

      <Nav className="d-flex justify-content-center navbar">
        <div className="DCILogo">DCI Developer Community</div>
        <div className="">
          <Col className=" d-flex justify-content-center mx-5">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/forum">Forum</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/news">News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/resources">Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
            </Nav.Item>
          </Col>
        </div>
        <div>
          <img src="./images/user-solid.svg" />
        </div>
      </Nav>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
