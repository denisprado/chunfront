import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ErrorBox from "./components/ErrorBox";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./config/reactotron";
import ModalRoot from "./ModalRoot";
import Page from "./pages/Page";
import store from "./store";
import { Container } from "./styles/components";
import GlobalStyle from "./styles/global";
import TopButton from "./components/TopButton";
// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <ModalRoot />
        <TopButton />
        <Container>
          <Navbar />
          <ErrorBox />
          <Page />
          <Footer />
        </Container>
      </Router>
    </Provider>
  );
}
