import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";
import "./index.css";

ReactDom.render(
  <StateContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </StateContextProvider>,
  document.getElementById("root")
);
