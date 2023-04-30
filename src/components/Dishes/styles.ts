import styled from "styled-components";

export const DishesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 56px 16px 120px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`