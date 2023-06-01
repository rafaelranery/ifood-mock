import { useSelector } from "react-redux"
import Banner from "../../components/Banner"
import Cart from "../../components/Cart"
import Dishes from "../../components/Dishes"
import Modal from "../../components/Modal"
import useRestoreScroll from "../../hooks/useRestoreScroll"
import { RootReducer } from "../../store/store"
import { Navigate } from "react-router-dom"

const Profile = () => {
  useRestoreScroll()
  const { item } = useSelector((state: RootReducer) => state.restaurants)

  if (item) {
    return (
      <>
        <Banner />
        <div className="container">
          <Dishes />
        </div>
        <Cart />
        <Modal />
      </>
    )
  }
  return <Navigate to='/' />
}

export default Profile