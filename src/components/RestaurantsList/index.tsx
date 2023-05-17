/* util */
import { useSelector } from 'react-redux'
import { useFetchRestaurants } from '../../hooks/useFetchRestaurants'
/* styles */
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'
import { RootReducer } from '../../store/store'

const RestaurantsList = () => {
  useFetchRestaurants()

  const { allRestaurants: restaurants } = useSelector((state: RootReducer) => state.restaurants)

  return (
    <S.List>
      {restaurants.map((item) => <RestaurantCard id={item.id} titulo={item.titulo} tipo={item.tipo} destacado={item.destacado} descricao={item.descricao} avaliacao={item.avaliacao} capa={item.capa}  key={item.id} />)}
    </S.List>
  )
}

export default RestaurantsList