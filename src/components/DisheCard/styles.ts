import styled from "styled-components";
import { color, fontSize } from "../../styles";

export const Card = styled.li`
  background-color: ${color.salmon};
  color: ${color.cardBg};
  padding: 8px;
  transition 500ms;
  img{
    transition: 500ms;
    width: 100%;
    display: block;
  }
  &:hover {
    border-radius: 8px;
    transition 500ms;
    img {
      border-radius: 8px;
      transition 500ms;
    }
  }
`

export const CardTitle = styled.h5`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
`

export const CardDesc = styled.p`
  margin-bottom: 16px;
  font-size: ${fontSize.normal};
  line-height: 22px;

  @media (max-width: 480px) {
    font-size: ${fontSize.small};
  }
`

