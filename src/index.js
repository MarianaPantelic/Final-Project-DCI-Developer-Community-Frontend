import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./components/navbar";
import Footer from "./components/footer";

import About from "./pages/about";
import Blog from "./pages/blog";
import Forum from "./pages/forum";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Login from "./pages/login";
import Post from "./pages/post";
import Register from "./pages/register";
import Resources from "./pages/resources";
import UserProfile from "./pages/userprofile";
import News from "./pages/news";

import AddPosts from "./components/addPosts";
import AddQuestions from "./components/addQuestions";

import "./css/main.css";
import "./css/about.css";
import "./css/blog.css";
import "./css/forum.css";
import "./css/home.css";
import "./css/jobs.css";
import "./css/login.css";
import "./css/news.css";
import "./css/post.css";
import "./css/register.css";
import "./css/resources.css";
import "./css/userprofile.css";

const axios = require("axios").default;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [questions, setQuestions] = useState([]);
  console.log(posts);
  console.log(questions)
  console.log(process.env.REACT_APP_ENV);

  useEffect(() => {
    sendPostGetRequest();
  }, []);

  useEffect(() => {
    sendUserGetRequest();
  }, []);
  useEffect(() => {
    sendQuestionsGetRequest();
  }, []);

  const sendPostGetRequest = async () => {
    try {
      const response = await axios.get("http://localhost:3001/blogs/");
      setPosts(response.data);
      console.log(response.data);
      
    } catch (err) {
      console.error(err);
    }
  };
  
  const sendUserGetRequest = async () => {
    try {
      const resp = await axios.get("http://localhost:3001/users");
      setUsers(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
const sendQuestionsGetRequest = async () => {
  try {
    const questionsresponse = await axios.get("http://localhost:3001/questions");
    setQuestions(questionsresponse.data);
    console.log(questionsresponse.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/forum">
            <Forum
              show={questions}
              sendQuestionsGetRequest={sendQuestionsGetRequest}
            />
          </Route>
          <Route path="/addQuestions">
            <AddQuestions sendQuestionsGetRequest={sendQuestionsGetRequest} />
          </Route>
          <Route path="/blog">
            <Blog show={posts} sendPostGetRequest={sendPostGetRequest} />
          </Route>
          <Route path="/addPosts">
            <AddPosts sendPostGetRequest={sendPostGetRequest} />
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
            <UserProfile
              users={users}
              sendUserGetRequest={sendUserGetRequest}
            />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById("root"));