import React from "react";

import { Container, StyledLink } from "./styles";

const Logo = (props) => (
  <Container>
    <StyledLink smooth to="#top">
      <strong>CHUN</strong> FOTOGRAFIA {props.children}
    </StyledLink>
  </Container>
);

export default Logo;
