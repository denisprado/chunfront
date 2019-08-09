import styled from "styled-components";
import { NavHashLink as HashNavLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
export const Container = styled.div``;

export const StyledHashLink = styled(HashNavLink)`
  margin: 15px;
  text-shadow: 1px 1px 0px #212121;
  text-transform: uppercase;
`;
export const StyledLink = styled(Link)`
  margin: 15px;
  text-shadow: 1px 1px 0px #212121;
  text-transform: uppercase;
`;
