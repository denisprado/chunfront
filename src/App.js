import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm";
import ErrorBox from "./components/ErrorBox";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./config/reactotron";
import ModalRoot from "./ModalRoot";
import Albums from "./pages/Albums";
import Page from "./pages/Page";
import store from "./store";
import { Container } from "./styles/components";
import GlobalStyle from "./styles/global";

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <ModalRoot />
      <Container>
        <Navbar />
        <ErrorBox />
        <Page />
        <Albums />
        <ContactForm />
        <Footer />
      </Container>
    </Router>
  </Provider>
);

export default App;
