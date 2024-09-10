import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as S from './styles'

import Button from '@components/Button';
import RedStatus from '@assets/RedStatusButton.png';
import RoundedHeader from "@components/RoundedHeader";
import GreenStatus from '@assets/GreenStatusButton.png';

import getMealsStored from '@storage/meal/getMealsStored';
import deleteMeal from '@storage/meal/deleteMeal';
import MealStorageDTO from '@storage/meal/MealStorageDTO';

export function MealInfo(){
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [meal, setMeal] = useState<MealStorageDTO | null>(null)
  const navigation = useNavigation()

  useEffect(() => {
    async function loadMeal() {
      const meals = await getMealsStored();
      const mealDetails = meals.find(meal => meal.id === id);
      setMeal(mealDetails || null);
    }

    loadMeal();
  }, [id]);
  
  function handleGoToMealInfoEdit(id: string){
    return () => {
      navigation.navigate('mealInfoEdit', { id });
  };
  }
  
  if (!meal) {
    return (
      <S.Container>
        <S.TextBig>Carregando...</S.TextBig>
      </S.Container>
      );
  }
  
  async function handleDeleteMeal() {
  Alert.alert(
    "Excluir Refeição",
    "Você tem certeza que deseja excluir esta refeição?",
    [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Sim,xcluir", 
        style: "destructive",
        onPress: async () => {
          try {
            await deleteMeal(id);
            navigation.goBack();
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível excluir a refeição.');
          }
        } 
      }
    ]
  );
}

  return (
    <S.Container>
      <RoundedHeader backgroundStatus={meal.isInDiet === 'yes' ? "green" : "red"} title={'Refeição'} />
      <S.BackgroundContainer>
        <S.TextBig>{meal.name}</S.TextBig>
        <S.TextSmall>{meal.description}</S.TextSmall>
        <S.TextMedium>Data e hora</S.TextMedium>
        <S.TextSmall>{meal.date} às {meal.time}</S.TextSmall>

        <S.MealStatus>
          <S.Image source={meal.isInDiet === 'yes' ? GreenStatus : RedStatus} />
          <S.TextSmall>{meal.isInDiet === 'yes' ? 'dentro da dieta' : 'fora da dieta'}</S.TextSmall>
        </S.MealStatus>

        <S.ContainerButton>
          <Button title={'Editar refeição'} type={'EDIT'} onPress={handleGoToMealInfoEdit(meal.id)} />
          <Button title={'Remover refeição'} type={'DELETE'} onPress={handleDeleteMeal}/>
        </S.ContainerButton>
      </S.BackgroundContainer>
    </S.Container>
  );
}