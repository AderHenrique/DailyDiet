import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import * as S from './styles';

import CheckButtonDiet from '@components/CheckButtonDiet';
import RoundedHeader  from '@components/RoundedHeader';
import InputText from '@components/InputText';
import InputDate from '@components/InputDate';
import InputTime from '@components/InputTime';
import Button from '@components/Button';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import getMealsStored from '@storage/meal/getMealsStored';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function NewMeal() {
  const navigator = useNavigation();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  function handleSelectStatus(status: string) {
    setSelectedStatus(status);
  }

  async function handleSaveMeal() {
    if (!name || !description || !date || !time || !selectedStatus) {
      Alert.alert(
        "Campos Necessários",
        "Por favor, preencha todos os campos.",
        [{ text: "OK" }]
      );
      return;
    }

    const newMeal = {
      id: String(new Date().getTime()), 
      name,
      description,
      date,
      time,
      isInDiet: selectedStatus as 'yes' | 'no',
    };

    try {
      const existingMeals = await getMealsStored(); 
      const updatedMeals = [...existingMeals, newMeal]; 
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals)); 

      const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
      console.log('Dados armazenados:', storedMeals);

      
      if (selectedStatus === 'yes') {
        navigator.navigate('goodMealScreen');
      } else if (selectedStatus === 'no') {
        navigator.navigate('badMealScreen');
      }

    } catch (error) {
      console.error("Erro ao salvar refeição: ", error);
      Alert.alert(
        "Erro",
        "Não foi possível salvar a refeição.",
        [{ text: "OK" }]
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.Container>
        <RoundedHeader backgroundStatus={'gray'} title='Nova Refeição'/>
        
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
              onSelect={() => handleSelectStatus('yes')} />
            <CheckButtonDiet
              status='no'
              isSelected={selectedStatus === 'no'}
              onSelect={() => handleSelectStatus('no')} />
          </S.InputDietContainer>
          
          <S.ButtonContainer>
            <Button title={'Cadastrar refeição'} onPress={handleSaveMeal} type={'TEXT'} />
          </S.ButtonContainer>

        </S.BackgroundContainer>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}