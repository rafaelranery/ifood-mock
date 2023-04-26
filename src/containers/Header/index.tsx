/* npm */
import { useLocation } from 'react-router-dom'
/* styles */
import * as S from './styles'
import { Logo } from '../../styles'


const Header = () => {
  const location = useLocation();


  return (
    <S.Header>
      <Logo as={'h1'} />
      {
        location.pathname === '/'
        &&
        <S.TitleDisclaimer>
          Viva experiências gastronômicas no conforto da sua casa
        </S.TitleDisclaimer>
      }
    </S.Header>
  )
}

export default Header