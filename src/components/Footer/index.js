import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';

const Footer = () =>
  <Container>
    <Link to="/">
      Chun Fotografia Copyright
    </Link>
    <Link href="http://www.denisforigo.com">
      Criado por Denis Forigo
    </Link>
  </Container>;

export default Footer;