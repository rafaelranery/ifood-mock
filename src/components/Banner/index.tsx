import { useSelector } from "react-redux"
/* store */
import { RootReducer } from "../../store/store"
/* styles */
import * as S from './styles'

const Banner = () => {

  const { item } = useSelector((state: RootReducer) => state.currentRestaurant)

  return (
    <S.Banner img={item?.img}>
      <div className="container">
        <h4>{item?.category}</h4>
        <h3>{item?.name}</h3>
      </div>
    </S.Banner>
  )
}

export default Banner