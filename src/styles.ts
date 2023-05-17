/* npm */
import styled, { createGlobalStyle } from 'styled-components'
/* assets */
import logo from './assets/images/efood-logo.svg'

export const color = {
  salmon: '#E66767',
  salmonLighter: '#FFEBD9',
  cardBg: '#F5F5F5',
  black: '#000'
}

export const fontSize = {
  normal: '14px',
  small: '12px',
  extraSmall: '10px',
  large: '32px',
  extraLarge: '36px',
  rating: '18px'
}

export const Logo = styled.img`
  margin: 0 auto;
  width: 125px;
  height: 58px;
  background-image: url(${logo});
`

export const CarBtn = styled.button`
  background-color: ${color.cardBg};
  color: ${color.salmon};
  display: flex;
  width: 100%;
  padding: 4px 0;
  border: none;
  justify-content: center;
  font-weight: bold;
  font-size: ${fontSize.normal};
  cursor: pointer;
  transition 800ms;
  margin-top: auto;

  &:hover {
    border-radius: 8px;
    transition 800ms;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${color.black};
  opacity: 0.8;
  z-index: 1;
`

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sie: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
      background-color: #FFF8F2;
    }

    .container {
      max-width: 1024px;
      margin: 0 auto;
    }
`

export default GlobalStyle
