/* npm */
import styled from "styled-components";
import { color, fontSize } from "../../styles";
/* assets */
import headerBg from '../../assets/images/header-bg.svg'

export const Header = styled.header`
padding: 40px 0;
text-align: center;
color: ${color.salmon};
background-image: url(${headerBg});
`

export const TitleDisclaimer = styled.h2`
  font-size: ${fontSize.extraLarge};
  font-weight: 900;
  width: 540px;
  margin: 0 auto;
  margin-top: 136px;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${fontSize.rating};
  font-weight: bold;
  a {
    text-decoration: none;
    color: ${color.salmon}
  }
  h1 {
    margin: 0;
  }
`