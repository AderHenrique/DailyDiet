import * as S from './styles'
import { SmileyWink } from 'phosphor-react-native';

const ListEmpty = () => {
  return (
    <S.Container>
      <S.Message>Sua lista está vazia.</S.Message>
      <S.Message>Que tal adicionar alguma refeição?</S.Message>
      <SmileyWink size={32}/>
    </S.Container>
  )
}

export default ListEmpty