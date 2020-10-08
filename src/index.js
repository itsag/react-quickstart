// Modules
import React from "react";
import ReactDOM from "react-dom";

// Libraries
import { UiBrowserRouter } from "./modules/libraries/router";

// Content
import Content from "./modules/components/content";

// Styles
import { GlobalStyles } from "./styles/global.styles";
import { ReactToastifyStyles } from "./styles/react-toastify.styles";

// Render
ReactDOM.render(
  <UiBrowserRouter>
    <GlobalStyles />
    <ReactToastifyStyles />

    <Content />
  </UiBrowserRouter>,
  document.getElementById("app")
);
