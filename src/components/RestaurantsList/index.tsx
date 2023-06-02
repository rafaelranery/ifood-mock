import RestaurantCard from '../RestaurantCard'
import Loader from '../Loader'
import { useGetRestaurantsQuery } from '../../services/api'
import { color } from '../../styles'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { setRestaurants } from '../../store/reducers/restaurants'
import { useEffect } from 'react'

const RestaurantsList = () => {
  const dispatch = useDispatch()
  const { data: restaurants } = useGetRestaurantsQuery()
  
  useEffect(() => {
    if(restaurants) {
      dispatch(setRestaurants(restaurants))
    }
  }, [restaurants, dispatch])

  if (restaurants) {
    return (
      <S.List>
        {restaurants.map((item) => <RestaurantCard id={item.id} titulo={item.titulo} tipo={item.tipo} destacado={item.destacado} descricao={item.descricao} avaliacao={item.avaliacao} capa={item.capa}  key={item.id} />)}
      </S.List>
    )
  }
  return <Loader color={color.salmon} />
}

export default RestaurantsList