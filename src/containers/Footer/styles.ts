import styled from "styled-components";

import bg from '../../assets/images/header-bg.svg'
import { color } from "../../styles";

export const Footer = styled.footer`
  background-image: url(${bg});
  text-align: center;
  padding: 40px 0;
  color: ${color.salmon}
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 80px;
`