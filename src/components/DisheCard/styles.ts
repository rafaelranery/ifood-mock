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

export const CarBtn = styled.button`
  background-color: ${color.cardBg};
  color: ${color.salmon};
  display: block;
  width: 100%;
  padding: 4px 0;
  border: none;
  font-weight: bold;
  font-size: ${fontSize.normal};
  cursor: pointer;
  transition 800ms;

  &:hover {
    border-radius: 8px;
    transition 800ms;
  }
`