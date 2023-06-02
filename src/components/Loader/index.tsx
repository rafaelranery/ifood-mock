import { FadeLoader } from "react-spinners"
import * as S from './styles'
import { color } from "../../styles"

type Props = {
  color: string
}

const Loader = ({color}: Props) => {
  return (
    <S.Container>
      <FadeLoader color={color} />
    </S.Container>
  )
}

export default Loader