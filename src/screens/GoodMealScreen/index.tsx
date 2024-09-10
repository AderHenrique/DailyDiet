import { useNavigation } from "@react-navigation/native";

import * as S from "./styles"

import  Button  from "@components/Button"
import MealIllustration from '@assets/GreenMealIllustration.png'

export function GoodMealScreen() { 
  const navigator = useNavigation();
  
  function handleGoToHome() {
    navigator.navigate('home');
  }



  return (
    <S.Container>
      <S.Title>Continue assim!</S.Title>
      <S.Text>Você continua <S.BoldText>dentro da dieta.</S.BoldText> Muito bem!</S.Text>
      <S.Image source={MealIllustration}/>
      <S.ContainerButton>
          <Button title={'Ir para página inicial'} type={'TEXT'} onPress={handleGoToHome}/>
        </S.ContainerButton>
    </S.Container>
  )
}