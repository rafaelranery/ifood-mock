/* util */
import { useFetchRestaurants } from '../../hooks/useFetchRestaurants'
/* styles */
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantsList = () => {
  useFetchRestaurants()
  const { data: restaurants } = useGetRestaurantsQuery()

  // const { allRestaurants: restaurants } = useSelector((state: RootReducer) => state.restaurants)

  if (restaurants) {
    return (
      <S.List>
        {restaurants.map((item) => <RestaurantCard id={item.id} titulo={item.titulo} tipo={item.tipo} destacado={item.destacado} descricao={item.descricao} avaliacao={item.avaliacao} capa={item.capa}  key={item.id} />)}
      </S.List>
    )
  }

}

export default RestaurantsList