import React from "react";
import { Link } from "react-router-dom";


const Blog = (props) => {
  

  return (
    <section className="showPostsSection">
      <div className="container">
        <Link to="/addPosts" className="link_addPost">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-warning newPostButton" type="button">
              Write a new post
            </button>
          </div>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {props.show.length < 1 ? (
              <h2 className="blogs">No Blogs Yet</h2>
            ) : (
              props.show.map((post, index) => (
                <Link className="blogsLink">
                  <h2 blogs>{post.title}</h2>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
