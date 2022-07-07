import React from "react";
import ReactDom from "react-dom";
import { StoreProvider } from "./Store";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDom.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
