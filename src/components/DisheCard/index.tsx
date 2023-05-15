import { useDispatch } from 'react-redux'
import { CarBtn } from '../../styles'
import * as S from './styles'
import Dish from '../../models/Dishes'
import { add, open } from '../../store/reducers/cart'
import { open as openModal } from '../../store/reducers/modal'
/* img temp */

type Props = {
  dish: Dish
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
      <img onClick={openDetails} src={dish.img} alt="" />
      <S.CardTitle>{dish.name}</S.CardTitle>
      <S.CardDesc>{dish.description}</S.CardDesc>
      <CarBtn onClick={addToCart}>Add to cart</CarBtn>
    </S.Card>
  )
}
export default DisheCard