import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

import "./config/reactotron";
import store from "./store";

import ErrorBox from "./components/ErrorBox";
import Footer from "./components/Footer";

import { Container } from "./styles/components";
import Navbar from "./components/Navbar";

import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />

        <ErrorBox />
        <Routes />

        <Footer />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
