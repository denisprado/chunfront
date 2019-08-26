import React from "react";

import { useSpring } from "react-spring";
import { StiledCard } from "./styles";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card(props) {
  const [animationProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <StiledCard
      class="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: animationProps.xys.interpolate(trans) }}
    >
      {props.children}
    </StiledCard>
  );
}
