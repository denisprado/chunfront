import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as AlbumsActions } from "../../store/ducks/albums";
import { Creators as PagesActions } from "../../store/ducks/pages";
import { StyledHashLink, StyledLink } from "./styles";

export default function Menu() {
  function scrollWithOffset(el, offset) {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PagesActions.getPagesRequest());
    dispatch(AlbumsActions.getAlbumsRequest());
  }, [dispatch]);

  const pages = useSelector(state => state.pages.data);

  return (
    <div>
      {pages.map(page => (
        <StyledHashLink key={page.id} smooth to={`#${page.title}`}>
          {!(page.title === "home") && page.title}
        </StyledHashLink>
      ))}

      <StyledHashLink
        smooth
        to={"#contato"}
        scroll={el => scrollWithOffset(el, 60)}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </StyledHashLink>
      <StyledLink to={"//instagram.com/chun_fotografia/"} target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </StyledLink>
      <StyledLink to={"//facebook.com/Chunfotografia/"} target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </StyledLink>
    </div>
  );
}
