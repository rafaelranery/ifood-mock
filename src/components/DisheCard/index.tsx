import { useDispatch } from 'react-redux'
import { CarBtn } from '../../styles'
import * as S from './styles'
import { Item } from '../../models/Restaurant'
import { add, open } from '../../store/reducers/cart'
import { open as openModal } from '../../store/reducers/modal'
/* img temp */

type Props = {
  dish: Item
}

const DisheCard = ({ dish }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
  }

  const openDetails = () => {
    dispatch(openModal(dish))
  }

  return (
    <S.Card>
      <img onClick={openDetails} src={dish.foto} alt="" />
      <S.CardTitle onClick={openDetails}>{dish.nome}</S.CardTitle>
      <S.CardDesc onClick={openDetails}>{dish.descricao.length > 132 ? `${dish.descricao.slice(0, 132)}...` : dish.descricao}</S.CardDesc>
      <CarBtn onClick={addToCart}>Add to cart</CarBtn>
    </S.Card>
  )
}
export default DisheCard