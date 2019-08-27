import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container } from './styles';

function TopButton() {
  return (
    <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={40}
      EasingType="easeOutCubic"
      AnimationDuration={500}
      ContainerClassName="ClassForContainer"
      TransitionClassName="ClassForTransition"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </ScrollUpButton>
  );
}

export default TopButton;
