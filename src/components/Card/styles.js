import styled from "styled-components";
import { animated } from "react-spring";

export const StiledCard = styled(animated.div)`
  width: 100%;
  height: 100%;
  background-image: ${props => props.imgBg && `url(${props.imgBg})`};
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;

  &&:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;
