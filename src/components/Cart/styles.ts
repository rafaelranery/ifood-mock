/* npm */
import styled from "styled-components";
/* style assets */
import { color } from "../../styles";
/* img */
import trash from '../../assets/images/lixeira-de-reciclagem1.svg'


export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;

  width: 100%;
  height: 100%;
  
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${color.salmon};

  max-width: 320px;
  width: 100%;
  padding: 32px 8px;

  z-index: 1;

  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }

  .empty-state {
    text-align: center;
    color: ${color.salmonLighter};
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
  }
`

export const CartItem = styled.div`
  padding: 8px;
  padding-bottom: 12px;
  margin-bottom: 16px;

  position: relative;
  display: flex;

  background-color: ${color.salmonLighter};
  color: ${color.salmon};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;

    margin-right: 8px;
  }

  h4 {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 18px;
  }

  span {
    display: block;
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    background-color: transparent;
    background-size: 100%;

    border: none;
    padding: 0;
    
    position: absolute;

    
    width: 18px;
    height: 18px;

    right: 8px;
    bottom: 8px;

    cursor: pointer;
  }
`

export const Price = styled.p`
  color: ${color.salmonLighter};
  font-weight: bold;
  font-size: 14px;

  display: flex;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 16px;
`