import { useNavigation } from "@react-navigation/native";

import * as S from "./styles"

import Button  from "@components/Button"
import MealIllustration from '@assets/RedMealIllustration.png'

export function BadMealScreen() { 
  const navigator = useNavigation();
  
  function handleGoToHome() {
    navigator.navigate('home');
  }

  return (
    <S.Container>
      <S.Title>Que pena!</S.Title>
      <S.Text>Você <S.BoldText>saiu da dieta </S.BoldText>dessa vez, mas continue se esforçando e não desista!</S.Text>
      <S.Image source={MealIllustration}/>
      <S.ContainerButton>
          <Button title={'Ir para página inicial'} type={'TEXT'} onPress={handleGoToHome}/>
        </S.ContainerButton>
    </S.Container>
  )
}