/* npm */
import { Routes as RoutesDOM, Route } from 'react-router-dom'
/* Pages */
import Home from './pages/Home'
import Profile from './pages/Profile'

const Routes = () => (
  <RoutesDOM>
    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
  </RoutesDOM>
)

export default Routes