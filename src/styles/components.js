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
`;

export const Content = styled.div`
    margin: 0 auto; 
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
position: ${props => (props.relative ? 'relative' : null)};

`;

export const Column = styled.div`
position: ${props => (props.absolute ? 'absolute' : null)};
top: ${props => (props.absolute ? '180px' : null)};
left: ${props => (props.absolute ? `${(props.col * (100 / 12))}%` : null)};
width: ${props => (props.absolute ? `${(props.col * (100 / 12))}%` : null)};
flex-grow: ${ props => (props.col ? props.col : 1)};
flex-basis: 30px;
flex-shrink: ${ props => (props.col ? props.col : 1)};
margin-right: 30px;
background-color: #212121;
padding: 15px;
`;
