/* styles */
import { CarBtn } from '../../styles'
import * as S from './styles'
/* img */

const Cart = () => {

  return (
    <S.CartContainer>
      <S.Overlay></S.Overlay>
      <S.Sidebar>
        <ul>
          <li>
            <S.CartItem>
              <img src='http://placekitten.com/200/200' />
              <div>
                <h4>Nome do item</h4>
                <span>R$ 60,90</span>
              </div>
              <button type='button' />
            </S.CartItem>
          </li>
          <li>
            <S.CartItem>
              <img src='http://placekitten.com/200/200' />
              <div>
                <h4>Nome do item</h4>
                <span>R$ 60,90</span>
              </div>
              <button type='button' />
            </S.CartItem>
          </li>
        </ul>
        <S.Price>Valor total <span>R$ 182,70</span></S.Price>
        <CarBtn type="button">Continuar com a entrega</CarBtn>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart