/* npm */
import { useDispatch } from 'react-redux'
/* store */
import { setCurrentRestaurant } from '../../../src/store/reducers/restaurants'
/* styles */
import * as S from './styles'
/* assets */
import star from '../../assets/images/star-rating.svg'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  tipo: string
  destacado?: boolean
  descricao: string
  capa: string
}

const RestaurantCard = ({
  id,
  titulo,
  avaliacao,
  tipo,
  descricao,
  capa,
  destacado
}: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Card id={id.toString()}>
      <img src={capa} alt={`${titulo} Image`} />
      <S.TagContainer>
        {destacado && <S.Tag>Highlight of the week</S.Tag>}
        <S.Tag>{tipo}</S.Tag>
      </S.TagContainer>
      <S.CardAbout>
        <S.CardHeader>
          <h3>{titulo}</h3>
          <aside>
            <p>{avaliacao}</p>
            <img src={star} alt="Rating" />
          </aside>
        </S.CardHeader>
        <S.CardDesc>{descricao}</S.CardDesc>
        <S.BtnContainer>
          <S.LinkBtn
            to={'/profile'}
            onClick={() => dispatch(setCurrentRestaurant(id))}
          >
            Saiba mais
          </S.LinkBtn>
        </S.BtnContainer>
      </S.CardAbout>
    </S.Card>
  )
}

export default RestaurantCard
