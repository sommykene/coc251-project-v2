import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import { AuthProvider } from "./routes/AuthProvider";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
