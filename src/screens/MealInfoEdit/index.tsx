import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import * as S from './styles';

import CheckButtonDiet from '@components/CheckButtonDiet';
import RoundedHeader from '@components/RoundedHeader';
import InputText from '@components/InputText';
import InputDate from '@components/InputDate';
import InputTime from '@components/InputTime';
import Button from '@components/Button';
import MealStorageDTO from '@storage/meal/MealStorageDTO';
import getMealsStored from '@storage/meal/getMealsStored';
import updateMeal from '@storage/meal/updateMeal';

export function MealInfoEdit() {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [meal, setMeal] = useState<MealStorageDTO | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'yes' | 'no' | null>(null); 

  const navigation = useNavigation();

  useEffect(() => {
    async function loadMeal() {
      const meals = await getMealsStored();
      const mealDetails = meals.find(meal => meal.id === id);
      if (mealDetails) {
        setMeal(mealDetails);
        setName(mealDetails.name);
        setDescription(mealDetails.description);
        setDate(mealDetails.date);
        setTime(mealDetails.time);
        setSelectedStatus(mealDetails.isInDiet);
      }
    }
    loadMeal();
  }, [id]);

  async function handleSaveMeal() {
    if (!name || !description || !date || !time || !selectedStatus) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    const updatedMeal: MealStorageDTO = {
      id,
      name,
      description,
      date,
      time,
      isInDiet: selectedStatus, 
    };

    try {
      await updateMeal(updatedMeal);
      Alert.alert(
      'Sucesso',
      'Refeição atualizada com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('home');
          }
        }
      ]
    );
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <RoundedHeader backgroundStatus={'gray'} title='Editar refeição' />

        <S.BackgroundContainer>
          <S.Text>Nome</S.Text>
          <InputText height={50} value={name} onChangeText={setName} />
          <S.Text>Descrição</S.Text>
          <InputText height={150} value={description} onChangeText={setDescription} />

          <S.DateTimeContainer>
            <S.DataContainer>
              <S.Text>Data</S.Text>
              <InputDate value={date} onChange={setDate} />
            </S.DataContainer>

            <S.TimeContainer>
              <S.Text>Hora</S.Text>
              <InputTime value={time} onChange={setTime} />
            </S.TimeContainer>
          </S.DateTimeContainer>

          <S.Text>Está dentro da dieta?</S.Text>

          <S.InputDietContainer>
            <CheckButtonDiet
              status='yes'
              isSelected={selectedStatus === 'yes'}
              onSelect={() => setSelectedStatus('yes')} /> 
            <CheckButtonDiet
              status='no'
              isSelected={selectedStatus === 'no'}
              onSelect={() => setSelectedStatus('no')} /> 
          </S.InputDietContainer>

          <S.ButtonContainer>
            <Button title={'Salvar alterações'} onPress={handleSaveMeal} type={'TEXT'} />
          </S.ButtonContainer>

        </S.BackgroundContainer>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
