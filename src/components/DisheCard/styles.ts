import styled from "styled-components";
import { color, fontSize } from "../../styles";

export const Card = styled.li`
  background-color: ${color.salmon};
  color: ${color.cardBg};
  padding: 8px;
`

export const CardTitle = styled.h5`
  margin: 8px 0;
  font-size: 16px;
  font-weight: bold;
`

export const CardDesc = styled.p`
  margin-bottom: 8px;
  font-size: ${fontSize.normal};
  line-height: 22px;
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
`