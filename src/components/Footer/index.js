import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Copyright, MadeBy } from './styles';

const Footer = () =>
  <Container>
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
  </Container>;

export default Footer;