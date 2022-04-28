import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import "./index.css";
import store from "app/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
