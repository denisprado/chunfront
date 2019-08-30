import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerFooter, Container, Content, Copyright, MadeBy } from "./styles";
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from '../SocialIcons'

function Footer() {
  const [hover, setHover] = useState(false)

  return (
    <ContainerFooter>
      <Container>
        <Content>
          <Copyright>
            <Link to="/"><SocialIcons /></Link>
          </Copyright>
          <MadeBy>
            <a href="http://www.denisforigo.com">Website por Denis Forigo </a>
            <a onMouseEnter={() => setHover(!hover)}
              onMouseLeave={() => setHover(!hover)}
              href={`//${process.env.REACT_APP_ADMIN_URL}`}
              target="_blank"
              rel="noopener noreferrer">{hover ? <FontAwesomeIcon icon={faDoorOpen} /> : <FontAwesomeIcon icon={faDoorClosed} />} </a>
          </MadeBy>
        </Content>
      </Container>
    </ContainerFooter>
  )
};

export default Footer;
