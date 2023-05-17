import { useSelector } from "react-redux"
/* store */
import { RootReducer } from "../../store/store"
/* styles */
import * as S from './styles'

const Banner = () => {

  const { item } = useSelector((state: RootReducer) => state.restaurants)

  return (
    <S.Banner img={item?.capa}>
      <div className="container">
        <h4>{item?.tipo}</h4>
        <h3>{item?.titulo}</h3>
      </div>
    </S.Banner>
  )
}

export default Banner