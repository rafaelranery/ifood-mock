import styled from "styled-components";
import { color, fontSize } from "../../styles";
import { Link } from "react-router-dom";

export const Card = styled.li`
display: flex;
flex-direction: column;
max-width: 100%;
height: 100%;
position: relative;
color: ${color.salmon};
transition: 300ms;

img {
  display: block;
  width: 100%;
  max-height: 216px;
  object-fit: cover;
}
@media (max-width: 1025px) {
  img {
    max-height: 160px;
    height: 100%;
  }
@media (max-width: 426px) {
  img {
    max-height: 220px;
    height: 100%;
  }
}
`

export const CardAbout = styled.div`
  border: 1px solid ${color.salmon};
  border-top: none;
  padding: 8px;
  background-color: ${color.cardBg};
  height: 100%;

  display: flex;
  flex-direction: column;
`
export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;

    aside {
      font-weight: bold;
      font-size: ${fontSize.rating};
      display: flex;
      align-items: center;
      gap: 8px;
      *  {
        height: 21px;
      }
    }
`

export const CardDesc = styled.p`
    font-size: ${fontSize.normal};
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 16px;
`

export const LinkBtn = styled(Link)`
  padding: 4px 6px;
  background-color: ${color.salmon};
  font-size: ${fontSize.normal};
  font-weight: bold;
  color: ${color.salmonLighter};
  text-decoration: none;

  max-width: fit-content;
` 

export const TagContainer = styled.div`
position: absolute;
top: 16px;
right: 16px;
`

export const Tag = styled(LinkBtn.withComponent('p'))`
  font-size: ${fontSize.small};
  margin-left: 8px;
  margin-top: 0px;
  display: inline-block;
  text-transform: capitalize;
`

export const BtnContainer = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
`