import React from "react";

import { Container, StyledLink } from "./styles";
import { useDispatch } from "react-redux";
import { Creators as ModalActions } from "../../store/ducks/modal";


function Logo(props) {
  // dispatch
  const dispatch = useDispatch();
  function handleCloseAlbum() {
    dispatch(ModalActions.closeModal());
  }

  return (
    <Container>
      <StyledLink onClick={() => handleCloseAlbum()} href="#top"><strong>CHUN</strong> FOTOGRAFIA
    {props.children && ` ⇒ ${props.children}`}</StyledLink>
    </Container>
  )
};

export default Logo;
