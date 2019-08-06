import React from "react";

import Logo from "../Logo";
import Menu from "../Menu";

import { Container, Content } from "./styles";

const Navbar = () => (
  <div>
    <Container>
      <Content>
        <Logo />
        <Menu />
      </Content>
    </Container>
  </div>
);

export default Navbar;
