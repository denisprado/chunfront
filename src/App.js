import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

import "./config/reactotron";
import store from "./store";

import ErrorBox from "./components/ErrorBox";
import Footer from "./components/Footer";
import Albums from "./pages/Albums";
import Page from "./pages/Page";
import ContactForm from "./components/ContactForm";
import { Container, Content } from "./styles/components";
import Navbar from "./components/Navbar";

import Routes from "./routes";
import ModalRoot from "./ModalRoot";

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <ModalRoot />
      <Container>
        <Navbar />
        <Content>
          <ErrorBox />
          <Routes />
          <Page />
          <Albums />
          <ContactForm />
        </Content>
        <Footer />
      </Container>
    </Router>
  </Provider>
);

export default App;
