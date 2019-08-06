import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Content, Copyright, MadeBy } from './styles';

const Footer = () =>
  <Container>
    <Content>
      <Copyright>
        <Link to="/">
          Chun Fotografia Copyright
      </Link>
      </Copyright>
      <MadeBy>
        <a href="http://www.denisforigo.com">
          Criado por Denis Forigo
      </a>
      </MadeBy>
    </Content>
  </Container>;

export default Footer;