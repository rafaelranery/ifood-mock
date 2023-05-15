import RestaurantsList from "../../components/RestaurantsList"
import useRestoreScroll from "../../hooks/useRestoreScroll"

const Home = () => {
  useRestoreScroll()

  return (
    <div className="container">
      <RestaurantsList />
    </div>
  )
}

export default Home