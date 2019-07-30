import styled from "styled-components";

export const Column = styled.div`
  flex-grow: ${props => (props.col ? props.col : 1)};
  flex-basis: 30px;
  flex-shrink: ${props => (props.col ? props.col : 1)};
  margin-right: 15px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(${props => (props.col ? props.col : 8)}, 1fr);
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
