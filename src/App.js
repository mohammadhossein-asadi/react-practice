import "./App.css";
import React, { useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <>
      <div className="main">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1 className="main">{resourceType}</h1>
    </>
  );
}

export default App;
