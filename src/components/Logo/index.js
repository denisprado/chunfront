import React from "react";

import { Container, StyledLink } from "./styles";

const Logo = (props) => (
  <Container>

    <a href="#top"><strong>CHUN</strong> FOTOGRAFIA {props.children && `| ${props.children}`}</a>

  </Container>
);

export default Logo;
