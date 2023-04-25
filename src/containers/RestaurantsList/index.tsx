/* styles */
import RestaurantCard from '../../components/RestaurantCard'
import * as S from './styles'

const RestaurantsList = () => {

  return (
    <S.List>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </S.List>
  )
}

export default RestaurantsList