/* styles */
import * as S from './styles'
/* assets */
import star from '../../assets/images/star-rating.svg'

type Props = {
  id: number
  name: string
  rating: number
  category: string
  highlight?: boolean
  description: string
  img: string
}

const RestaurantCard = ({
  id,
  name,
  rating,
  category,
  description,
  img,
  highlight
}: Props) => {

  return (
    <S.Card id={id.toString()}>
      {/*
        img | destaque categoria
        nome | rating | img
        description
        btn
      */}
      <img src={img} alt="" />
      <S.TagContainer>
        {highlight && <S.Tag>Highlight of the week</S.Tag>}
        <S.Tag>{category}</S.Tag>
      </S.TagContainer>
      <S.CardAbout>
        <S.CardHeader>
          <h3>{name}</h3>
          <aside>
            <p>{rating}</p>
            <img src={star} alt="" />
          </aside>
        </S.CardHeader>
        <S.CardDesc>
          {description}
        </S.CardDesc>
        <S.LinkBtn href='#'>Saiba mais</S.LinkBtn>
      </S.CardAbout>
    </S.Card>
  )
}

export default RestaurantCard