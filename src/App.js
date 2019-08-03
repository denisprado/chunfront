import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

import "./config/reactotron";
import store from "./store";

import ErrorBox from "./components/ErrorBox";
import Footer from "./components/Footer";

import { Container } from "./styles/components";
import Navbar from "./components/Navbar";

import Routes from "./routes";
import ModalRoot from "./ModalRoot";

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <ModalRoot />
      <Container>
        <ErrorBox />
        <Navbar />

        <Routes />

        <Footer />
      </Container>
    </Router>
  </Provider>
);

export default App;
