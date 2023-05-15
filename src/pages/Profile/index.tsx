import Banner from "../../components/Banner"
import Cart from "../../components/Cart"
import Dishes from "../../components/Dishes"
import Modal from "../../components/Modal"
import useRestoreScroll from "../../hooks/useRestoreScroll"

const Profile = () => {
  useRestoreScroll()

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

export default Profile