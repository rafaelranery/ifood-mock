import styled from "styled-components";
/* store */

type BannerProps = {
  img: string | undefined
}

export const Banner = styled.div<BannerProps>`
  background-image: url(${(props) => {return props.img}});
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  padding-top: 24px;
  padding-bottom: 32px;
  font-size: 36px;
  max-width: 100vw;
  width: 100%;
  position: relative;

  &::after {
    top: 0;
    position: absolute;
    content: '';
    background-color: #000;
    opacity: 0.4;
    height: 100%;
    width: 100%;
  }

  .container {
    position: relative;
    z-index: 2;
    padding-left: 12px;
  }

  h4 {
    font-weight: 100;
    margin-bottom: 156px;
    font-size: 32px;
  }
`