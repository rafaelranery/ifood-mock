/* styles */
import { useSelector, useDispatch } from 'react-redux'

import { CarBtn, Overlay } from '../../styles'
import * as S from './styles'

import { RootReducer } from '../../store/store'
import { close, remove } from '../../store/reducers/cart'

import {Item} from '../../models/Restaurant'

import { formatPriceBRL } from '../../utils/functions/formatPriceBRL'
import { totalValue } from '../../utils/functions/totalValue'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (item: Item) => {
    dispatch(remove(item))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          <li>
            {itens.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} />
                <div>
                  <h4>{item.nome}</h4>
                  <span>{formatPriceBRL(item.preco)}</span>
                </div>
                <button onClick={() => removeFromCart(item)} type='button' />
              </S.CartItem>
            ))}
          </li>
        </ul>
        <S.Price>Valor total <span>{formatPriceBRL(totalValue(itens))}</span></S.Price>
        <CarBtn type="button">Continuar com a entrega</CarBtn>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart