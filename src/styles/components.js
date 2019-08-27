import styled from "styled-components";
import { NavHashLink as HashNavLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  @media (max-width:684px) {
    grid-template-columns: repeat(${props => (props.colsm ? props.colsm : 8)}, 1fr);
  }
  @media (min-width:685px) and (max-width:1024px) {
    grid-template-columns: repeat(${props => (props.colmd ? props.colmd : 8)}, 1fr);
  }
  @media (min-width:1025px) {
    grid-template-columns: repeat(${props => (props.col ? props.col : 8)}, 1fr);
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  background-color: ${props =>
    props.bg && props.bg === true ? "#373737" : props.bg};
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: ${props => props.center && "center"};
  justify-content: ${props => props.center && "center"};
`;

export const Content = styled.div`
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0
    ${props => (props.col ? `${((12 - props.col) * (100 / 12)) / 2}%` : null)};
  position: ${props => (props.relative ? "relative" : null)};
  background: ${props => props.bg && "rgba(33, 33, 33, 0.85)"};
  padding-right: ${props => (props.p && props.p === true ? "30px" : props.p)};
`;

export const Column = styled.div`
  position: ${props => props.absolute && "absolute"};
  
  @media (max-width:684px) {
    width: ${props => props.absolute && `${(props.colsm ? props.colsm : props.colmd ? props.colmd : props.col ? props.col : 1) * (100 / 12)}%`};
    flex-grow: ${props => (props.colsm ? props.colsm : props.colmd ? props.colmd : props.col ? props.col : 1)};
    flex-shrink: ${props => (props.colsm ? props.colsm : props.colmd ? props.colmd : props.col ? props.col : 1)};
    left: ${props => props.leftsm && `${props.leftsm * (100 / 12)}%`};
    top: ${props => props.topsm && `${props.topsm * (100 / 12)}%`};
    bottom: ${props => props.bottomsm && `${props.bottomsm * (100 / 12)}%`};
  }
  @media  (min-width:685px) and (max-width:1024px) {
    width: ${props => props.absolute && `${props.colmd * (100 / 12)}%`};
    flex-grow: ${props => (props.colmd ? props.colmd : props.col ? props.col : 1)};
    flex-shrink: ${props => (props.colmd ? props.colmd : props.col ? props.col : 1)};
    left: ${props => props.leftmd && `${props.leftmd * (100 / 12)}%`};
    top: ${props => props.topmd && `${props.topmd * (100 / 12)}%`};
    bottom: ${props => props.bottommd && `${props.bottommd * (100 / 12)}%`};
  }
  @media (min-width:1025px) {
    left: ${props => props.left && `${props.left * (100 / 12)}%`};
    width: ${props => props.absolute && `${props.col * (100 / 12)}%`};
    flex-grow: ${props => (props.col ? props.col : 1)};
    flex-shrink: ${props => (props.col ? props.col : 1)};
    top: ${props => props.top && `${props.top * (100 / 12)}%`};
    bottom: ${props => props.bottom && `${props.bottom * (100 / 12)}%`};
  }

  flex-basis: 30px;
  background: ${props => props.bg && "rgba(33, 33, 33, 0.75)"};
  background-image: ${props => props.bgImg && `url(${props.bgImg})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${props => props.bg && `30px`};
  img {
    object-fit: cover;
    object-position: center;
    max-height: 100vh;
  }
`;

export const StyledHashLink = styled(HashNavLink)`
  margin: 15px;
  text-shadow: 1px 1px 0px #212121;
`;

export const StyledLink = styled(Link)`
  margin: 15px;
  text-shadow: 1px 1px 0px #212121;
`;
