import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Logo = () => (
  <Container>
    <Link to="/">
      <strong>CHUN</strong> FOTOGRAFIA
    </Link>
  </Container>
);

export default Logo;
