/* styles */
import * as S from './styles'
import { Logo } from '../../styles'


const Header = () => {

  return (
    <S.Header>
      <Logo as={'h1'} />
      <S.TitleDisclaimer>
        Viva experiências gastronômicas no conforto da sua casa
      </S.TitleDisclaimer>
    </S.Header>
  )
}

export default Header