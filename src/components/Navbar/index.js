import React from "react";

import Logo from "../Logo";
import Menu from "../Menu";

import { Container } from "./styles";

const Navbar = () => (
  <div>
    <Container>
      <Logo />
      <Menu />
    </Container>
  </div>
);

export default Navbar;
