import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import "antd/dist/antd.variable.less";
import "./themes/vars.css";
import "./themes/dark-vars.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
