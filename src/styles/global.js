import { createGlobalStyle } from "styled-components";
import "typeface-exo-2";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #373737;
    color: #fff;
    font-family: "Exo 2", sans-serif;
  }

  button {
    cursor: pointer;
  }

  p {
    font-weight: 200;
    font-size: 22px;
  }

  a {
    text-decoration: none;
    color: blue;
    padding-right: 15px;
    color: #9c9c9c;
    &:hover {
      color: #8a8a8a;
    }
    &:active {
      color: #777777;
    }
  }


  h1 {
    font-size: 60px;
    font-weight: 100;
  }

  .hero-image {
    border: 0px solid #fff;
  }

  .image-left {
    flex-direction: row-reverse;
  }
`;

export default GlobalStyle;

/**
 * Colors


{
  "0": "#ffffff",
  "5": "#fefefe",
  "10": "#fdfdfd",
  "20": "#fbfbfb",
  "30": "#f8f8f8",
  "40": "#f4f4f4",
  "50": "#f0f0f0",
  "60": "#eaeaea",
  "70": "#e3e3e3",
  "80": "#dbdbdb",
  "90": "#d2d2d2",
  "100": "#c7c7c7",
  "110": "#bababa",
  "120": "#acacac",
  "130": "#9c9c9c",
  "140": "#8a8a8a",
  "150": "#777777",
  "160": "#626262",
  "170": "#4d4d4d",
  "180": "#373737",
  "190": "#212121"
}
 */
