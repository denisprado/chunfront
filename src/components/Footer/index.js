import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Copyright, MadeBy } from "./styles";

const Footer = () => (
  <Container>
    <Content>
      <Copyright>
        <Link to="/">Chun Fotografia</Link>
      </Copyright>
      <MadeBy>
        <Link to={process.env.REACT_APP_ADMIN_URL}>admin</Link>
        <a href="http://www.denisforigo.com">website por Denis Forigo</a>
      </MadeBy>
    </Content>
  </Container>
);

export default Footer;
