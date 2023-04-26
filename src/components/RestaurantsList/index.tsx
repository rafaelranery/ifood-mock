/* util */
import RestaurantsFakeAPI from '../../utils/FakeRestaurants'
/* styles */
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

const RestaurantsList = () => {

  return (
    <S.List>
      {/* <RestaurantCard /> */}
      {RestaurantsFakeAPI.map((item) => <RestaurantCard id={item.id} name={item.name} category={item.category} highlight={item.highlight} description={item.description} rating={item.rating} img={item.img}  key={item.id} />)}
    </S.List>
  )
}

export default RestaurantsList