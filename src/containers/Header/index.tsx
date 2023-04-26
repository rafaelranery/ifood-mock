/* npm */
import { useLocation, Link } from 'react-router-dom'
/* styles */
import * as S from './styles'
import { Logo } from '../../styles'


const Header = () => {
  const { pathname } = useLocation();


  return (
    <S.Header>
      {
        pathname === '/'
          ?
          <Logo as={'h1'} />
          :
          <S.Navbar>
            <Link to={'/'}>Restaurantes</Link>
            <Logo as={'h1'} />
            <p>0 Produtos no carrinho</p>
          </S.Navbar>
      }
      {/* <Logo as={'h1'} /> */}
      {
        pathname === '/'
        &&
        <S.TitleDisclaimer>
          Viva experiências gastronômicas no conforto da sua casa
        </S.TitleDisclaimer>
      }
    </S.Header>
  )
}

export default Header