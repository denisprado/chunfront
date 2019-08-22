import React from "react";

import { Container, StyledLink } from "./styles";

const Logo = (props) => (
  <Container>
    <StyledLink href="#top"><strong>CHUN</strong> FOTOGRAFIA
    {props.children && `| ${props.children}`}</StyledLink>
  </Container>
);

export default Logo;
