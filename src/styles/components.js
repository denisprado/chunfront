import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(${props => (props.col ? props.col : 8)}, 1fr);
`;

export const Container = styled.div`
  width:100%;
`;

export const Section = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: ${props => props.center && 'center'};
`;

export const Content = styled.div`
    margin: 0 auto; 
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin: 0 ${props => (props.col ? `${(((12 - props.col) * (100 / 12))) / 2}%` : null)};
position: ${props => (props.relative ? 'relative' : null)};
background: ${props => (props.bg && 'rgba(33, 33, 33, 0.85)')};
padding: ${props => (props.bg && `30px`)};
`;

export const Column = styled.div`
position: ${props => (props.absolute && 'absolute')};
top: ${props => (props.top && `${(props.top * (100 / 12))}%`)};
bottom: ${props => (props.bottom && `${(props.bottom * (100 / 12))}%`)};
left: ${props => (props.left && `${(props.left * (100 / 12))}%`)};
width: ${props => (props.absolute && `${(props.col * (100 / 12))}%`)};
flex-grow: ${ props => (props.col ? props.col : 1)};
flex-basis: 30px;
flex-shrink: ${ props => (props.col ? props.col : 1)};
background: ${props => (props.bg && 'rgba(33, 33, 33, 0.85)')};
padding: ${props => (props.bg && `15px`)};
`;
