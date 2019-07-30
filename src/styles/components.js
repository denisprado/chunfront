import styled from "styled-components";

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

export const Content = styled.div`
@media screen and (max-width: 684px) {
    margin: 0 10%;
    margin: 0 calc(100% / 10);
  }
  @media screen and (min-width: 685px) {
    margin: 0 16.66%;
    margin: 0 calc(100% / 6);
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const Column = styled.div`
  flex-grow: ${props => (props.col ? props.col : 1)};
  flex-basis: 30px;
  flex-shrink: ${props => (props.col ? props.col : 1)};
  margin-right: 15px;
`;