import React from "react";
import "./Container.css";

function Container({ posts }) {
  return (
    <div className="data">
      {posts.map((post) => {
        return (
          <div className="data_items" key={post.id}>
            <div>
              <img className="Avatar" src={post.avatar} alt="unable to load" />
            </div>
            <h3>
              {post.first_name} {post.last_name}
            </h3>
            <div>{post.email}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Container;
