import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 30px 15px ;
  color: rgba(255,555,555,.6);
  background: ${ props => props.ok ? '#00aa00' : ' #ff555a'};
  margin: 0px center;
  font-size: 18px;
  display: flex;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30%;
  bottom:0;
  font-weight:700;

  button {
    color:rgba(255,555,555,.6);
    border: 0;
    background: transparent;

    img {
      height: 14px;
    }
  }
`;
