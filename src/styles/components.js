import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(${props => (props.col ? props.col : 8)}, 1fr);
`;

export const Container = styled.div``;

export const Section = styled.div`
  min-height: 100vh;
  display: flex;
  margin: 30px;
`;

export const Content = styled.div`
  @media screen and (max-width: 684px) {
    width: 83.33vw;
    margin: 30px auto;
    margin: 30px auto;
  }
  @media screen and (min-width: 685px) {
    width: 85vw;
    margin: 30px auto;
    margin: 30px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  flex-grow: ${props => (props.col ? props.col : 1)};
  flex-basis: 30px;
  flex-shrink: ${props => (props.col ? props.col : 1)};
  margin-right: 30px;
  background-color: #212121;
  padding: 15px;
`;
