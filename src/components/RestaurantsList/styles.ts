import styled from "styled-components";

export const List = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 32px auto 128px;


  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 8px;
    padding: 0 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`