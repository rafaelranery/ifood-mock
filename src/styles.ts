/* npm */
import styled, { createGlobalStyle } from 'styled-components'
/* assets */
import logo from './assets/images/efood-logo.svg'

export const color = {
  salmon: '#E66767',
  salmonLighter: '#FFEBD9',
  cardBg: '#F5F5F5'
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
