import Banner from "../../components/Banner"
import Cart from "../../components/Cart"
import Dishes from "../../components/Dishes"

const Profile = () => (
  <>
    <Banner />
    <div className="container">
      <Dishes />
    </div>
    <Cart />
  </>
)

export default Profile