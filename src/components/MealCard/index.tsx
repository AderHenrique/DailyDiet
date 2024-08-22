import * as S from './styles'

import statusImg from '@assets/status.png'
import { LineVertical } from 'phosphor-react-native';

export function MealCard() {
  return(
    <S.Container>
      <S.Date>
        12.08.22
      </S.Date>
      <S.MealContainer>
        <S.MealTextContainer>
          <S.Hour>16:00</S.Hour>
          <LineVertical size={22} color="#B9BBBC" />
          <S.MealName>X-tudo</S.MealName>
        </S.MealTextContainer>
        <S.MealStatus source={statusImg}/>
      </S.MealContainer>
    </S.Container>
    
  )
}