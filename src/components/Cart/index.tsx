/* styles */
import { useSelector, useDispatch } from 'react-redux'

import { CarBtn, Overlay } from '../../styles'
import * as S from './styles'

import { RootReducer } from '../../store/store'
import { close, remove } from '../../store/reducers/cart'

import Dish from '../../models/Dishes'

import { formatPriceBRL } from '../../utils/functions/formatPriceBRL'

const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (item: Dish) => {
    dispatch(remove(item))
  }

  const totalValue = (itens: Dish[ ]) => {
    return itens.reduce((accumutalor, currentValue) => {
      return accumutalor += currentValue.price
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          <li>
            {itens.map((item) => (
              <S.CartItem key={item.name}>
                <img src={item.img} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{formatPriceBRL(item.price)}</span>
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