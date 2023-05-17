import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'
import { CarBtn, Overlay } from '../../styles'

import { RootReducer } from '../../store/store'

import { formatPriceBRL } from '../../utils/functions/formatPriceBRL'
import { close as closeModal } from '../../store/reducers/modal'
import { open as openCart, add } from '../../store/reducers/cart'

import { Item } from '../../models/Restaurant'

const Modal = () => {
  const dispatch = useDispatch()
  const { isOpen, item } = useSelector((state: RootReducer) => state.modal)

  const addToCart = (item: Item) => {
    dispatch(add(item));
    dispatch(openCart())
    dispatch(closeModal())
  }


  if (item) {
    return (
      <S.ModalContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closeModal())} />
        <S.Modal>
          <img src={item.foto} alt={item?.nome} />
          <div>
            <h5>{item.nome}</h5>
            <p>{item.descricao}</p>
            <p>Serve: {item.porcao}</p>
            <CarBtn onClick={() => addToCart(item)} >Adicionar ao carrinho - {formatPriceBRL(item.preco)}</CarBtn>
          </div>
          <S.CloseBtn onClick={() => dispatch(closeModal())} />
        </S.Modal>
      </S.ModalContainer>
    )
  }
  return null
}

export default Modal