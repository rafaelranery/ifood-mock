import { useSelector } from "react-redux"
import DisheCard from "../DisheCard"

import * as S from './styles'
import { RootReducer } from "../../store/store"

const Dishes = () => {
  const dishesArr = useSelector((state: RootReducer) => state.currentRestaurant.item?.dishes)

  return (
    <S.DishesList>
      {dishesArr?.map((dish) => <DisheCard name={dish.name} description={dish.description} img={dish.img} key={dish.name} />)}
    </S.DishesList>
  )
}

export default Dishes