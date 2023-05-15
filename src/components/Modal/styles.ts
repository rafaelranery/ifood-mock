import styled from "styled-components";

import { CarBtn, color } from "../../styles";

import closeBtn from '../../assets/images/close-1.svg'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;

  z-index: 2;

  display: none;
  justify-content: center;
  align-items: center;

  &.is-open {
    display: flex;
  }
`
export const Modal = styled.div`
  max-width: 1024px;

  position: relative;
  z-index: 2;

  background-color: ${color.salmon};
  color: ${color.salmonLighter};
  
  margin: 171px;
  padding: 32px;

  display: flex;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h5 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  div {
    p {
      font-size: 14px;
      line-height: 22px;
    }

    p:nth-child(3) {
      margin-top: 72px;
    }
  }

  ${CarBtn} {
    width: auto;
    padding: 6px 8px;
    margin-top: 16px;
  }
`

export const CloseBtn = styled.button`
  border: none;
  
  background-image: url(${closeBtn});
  background-color: transparent;

  position: absolute;
  top: 8px;
  right: 8px;

  width: 16px;
  height: 16px;

  cursor: pointer;
`