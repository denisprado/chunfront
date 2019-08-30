import React from "react";
import { Link } from "react-router-dom";
import { ContainerFooter, Container, Content, Copyright, MadeBy } from "./styles";

const Footer = () => (
  <ContainerFooter>
    <Container>
      <Content>
        <Copyright>
          <Link to="/">Chun Fotografia</Link>
        </Copyright>
        <MadeBy>
          <a href={`//${process.env.REACT_APP_ADMIN_URL}`}
            target="_blank"
            rel="noopener noreferrer">admin </a>
          <a href="http://www.denisforigo.com">website por Denis Forigo</a>
        </MadeBy>
      </Content>
    </Container>
  </ContainerFooter>
);

export default Footer;
