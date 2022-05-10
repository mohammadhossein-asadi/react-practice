import React from "react";
import ReactDOM from "react-dom/client";
import StateProps from "./components/StateProps";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StateProps />
  </React.StrictMode>
);
