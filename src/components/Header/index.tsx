import * as S from './styles'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profilePic.png'

export function Header() {
  return(
    <>
      <S.Container>
        <S.Logo source={logoImg}/>
        <S.ProfilePicture source={profileImg}/>
      </S.Container>
      
      <S.PercentContainer>
        <S.Percent>90,86%</S.Percent>
        <S.Text>das refeições dentro da dieta</S.Text>
        <S.ArrowButton>
          <S.ArrowIcon/>
        </S.ArrowButton>
      </S.PercentContainer>

    </>
  )
}