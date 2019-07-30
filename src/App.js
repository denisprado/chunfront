import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

import "./config/reactotron";
import store from "./store";

import ErrorBox from "./components/ErrorBox";

import { Container, Content } from "./styles/components";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";

import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Page />
        <ErrorBox />
        <Routes />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
