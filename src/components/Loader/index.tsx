import { FadeLoader } from "react-spinners"
import * as S from './styles'
import { color } from "../../styles"

const Loader = () => {
  return (
    <S.Container>
      <FadeLoader color={color.salmon} />
    </S.Container>
  )
}

export default Loader