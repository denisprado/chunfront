import styled from "styled-components";

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
`;
