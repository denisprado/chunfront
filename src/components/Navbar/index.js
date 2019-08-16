import React from "react";

import Logo from "../Logo";
import Menu from "../Menu";

import { Container, Content } from "./styles";

const Navbar = (props) => (
  <div id="top">
    <Container>
      <Content>
        <Logo>{props.logo}</Logo>
        <Menu>{props.menu}</Menu>
      </Content>
    </Container>
  </div>
);

export default Navbar;
