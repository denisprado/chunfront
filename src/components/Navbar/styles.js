import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 15px;
  background: #212121;
  height: 80px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 684px) {
    margin: 0 10%;
    margin: 0 calc(100% / 10);
  }
  @media screen and (min-width: 685px) {
    margin: 0 16.66%;
    margin: 0 calc(100% / 6);
  }
`