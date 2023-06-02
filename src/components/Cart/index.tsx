/* styles */
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { CarBtn, Overlay } from '../../styles'
import * as S from './styles'

import { RootReducer } from '../../store/store'
import { close, displayCheckout, remove } from '../../store/reducers/cart'

import { Item } from '../../models/Restaurant'

import { formatPriceBRL } from '../../utils/functions/formatPriceBRL'
import { totalValue } from '../../utils/functions/totalValue'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, itens, checkout } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(displayCheckout(false))
  }

  const removeFromCart = (item: Item) => {
    dispatch(remove(item))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.Sidebar>
        {checkout.isActive && itens.length >= 0 ? (
          <Checkout />
        ) : (
          <>
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
            <CarBtn onClick={() => dispatch(displayCheckout(true))} type="button">Continuar com a entrega</CarBtn>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart