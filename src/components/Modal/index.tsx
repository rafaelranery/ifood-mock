import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'
import { CarBtn, Overlay } from '../../styles'

import { RootReducer } from '../../store/store'

import { formatPriceBRL } from '../../utils/functions/formatPriceBRL'
import { close as closeModal } from '../../store/reducers/modal'
import { open as openCart, add } from '../../store/reducers/cart'

import Dish from '../../models/Dishes'

const Modal = () => {
  const dispatch = useDispatch()
  const { isOpen, item } = useSelector((state: RootReducer) => state.modal)

  const addToCart = (item: Dish) => {
    dispatch(add(item));
    dispatch(openCart())
    dispatch(closeModal())
  }


  if (item) {
    return (
      <S.ModalContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closeModal())} />
        <S.Modal>
          <img src={item?.img} alt={item?.name} />
          <div>
            <h5>{item?.name}</h5>
            <p>{item?.description}</p>
            <p>Serve: de 2 a 4 pessoas</p>
            <CarBtn onClick={() => addToCart(item)} >Adicionar ao carrinho - {formatPriceBRL(item?.price)}</CarBtn>
          </div>
          <S.CloseBtn onClick={() => dispatch(closeModal())} />
        </S.Modal>
      </S.ModalContainer>
    )
  }
  return null
}

export default Modal