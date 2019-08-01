import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';

const Footer = () =>
  <Container>
    <Link to="/">
      Chun Fotografia Copyright
    </Link>
    <a href="http://www.denisforigo.com">
      Criado por Denis Forigo
    </a>
  </Container>;

export default Footer;