import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Container from "./Container";
import { Button } from "@material-ui/core";

function App() {
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPost, setTotalpost] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://reqres.in/api/users?page=" + JSON.stringify(page)
      );
      console.log(res.data);
      setPost(res.data.data);
      setTotalpost(res.data.total);
    }
    getData();
  }, [page]);

  console.log(page);

  const post = [];
  for (let i = 1; i <= totalPost / 6; i++) {
    post.push(i);
  }
  console.log(post);
  return (
    <div>
      <div className="content">
        <Container posts={posts} />
      </div>

      <div className="pagination">
        {post.map((number) => {
          return (
            <div key={number}>
              <Button
                onClick={() => {
                  setPage(number);
                }}
              >
                {number}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
