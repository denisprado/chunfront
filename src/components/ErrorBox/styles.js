import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 30px 15px ;
  color: rgba(255,555,555,.6);
  background: ${ props => props.ok ? '#00aa00' : ' #f55a5a'};
  margin: 0px 0 10px 0;
  font-size: 13px;
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
    width: 100%;
    top: 68px;

  button {
    color:rgba(255,555,555,.6);
    border: 0;
    background: transparent;

    img {
      height: 14px;
    }
  }
`;
