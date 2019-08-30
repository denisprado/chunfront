import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { StyledHashLink, StyledLink } from "../../styles/components";

function scrollWithOffset(el, offset) {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}

export default function SocialIcons() {
  return (
    <>
      <StyledHashLink
        smooth
        to={"#contact"}
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
    </>
  )
}