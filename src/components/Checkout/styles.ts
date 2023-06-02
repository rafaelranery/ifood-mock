import styled from "styled-components";
import { CarBtn, color } from "../../styles";

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginBottom?: string
}


export const CheckoutForm = styled.form`
  ${CarBtn} {
    margin-bottom: 8px;
  }
`
export const CheckoutContainer = styled.div`
color: ${color.salmonLighter};
h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}
p {
  font-size: 14px;
  margin-bottom: 24px;
}
`

export const Row = styled.div<RowProps>`
  max-width: 100%;
  color: ${color.salmonLighter};
  display: flex;
  gap: 32px;
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '0' };

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  width: ${({maxWidth}) => maxWidth ? maxWidth : '100%'};
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 8px;
    background-color: ${color.salmonLighter};

    &.error {
      border: 2px solid red;
      color: red;
    }
  }
`