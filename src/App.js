import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "@material-ui/lab/pagination";
import Container from "./Container";

function App() {
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://reqres.in/api/users?page=" + JSON.stringify(page)
      );
      console.log(res.data);
      setPost(res.data.data);
    }
    getData();
  }, [page]);

  console.log(page);

  return (
    <div>
      <div className="content">
        <Container posts={posts} />
      </div>

      <div className="pagination">
        <Pagination
          variant="outlined"
          count={2}
          defaultPage={1}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  );
}

export default App;
