/* npm */
import { useLocation, Link } from 'react-router-dom'
/* styles */
import * as S from './styles'
import { Logo } from '../../styles'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store/store';
import { open } from '../../store/reducers/cart';


const Header = () => {
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const { pathname } = useLocation();
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Header>
      <div className="container">
        {pathname === '/' ?
          <Logo as={'h1'} />
          :
          <S.Navbar>
            <Link to={'/'}>Restaurantes</Link>
            <Logo as={'h1'} />
            <p onClick={openCart}>{itens.length} produtos no carrinho</p>
          </S.Navbar>
        }
        {pathname === '/' && <S.TitleDisclaimer>Viva experiências gastronômicas no conforto da sua casa</S.TitleDisclaimer>}
      </div>
    </S.Header>
  )
}

export default Header