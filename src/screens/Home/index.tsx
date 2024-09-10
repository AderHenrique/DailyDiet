import { useState, useCallback, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import * as S from './styles';

import Header from '@components/Header';
import Button from '@components/Button';
import MealCard from '@components/MealCard';
import ListEmpty from '@components/ListEmpty';
import DietProgress from '@components/DietProgress';
import MealDateTitle from '@components/MealDateTitle';

import getMealsStored from '@storage/meal/getMealsStored'; 
import MealStorageDTO from '@storage/meal/MealStorageDTO'; 
import { calculateStats } from '@storage/meal/calculateMealStats';

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);
  const [percent, setPercent] = useState('0.00%');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const loadMeals = useCallback(async () => {
    setLoading(true);
    try {
      const storedMeals = await getMealsStored();
      const sortedMeals = storedMeals.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setMeals(sortedMeals);
    } catch (error) {
      console.error("Erro ao carregar as refeições: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadMeals(); 
    }, [loadMeals])
  );

  useEffect(() => {
    async function loadStats() {
      const { percent } = await calculateStats();
      setPercent(percent);
    }

    loadStats(); 
  }, [meals]);

  function handleGoToNewMeal() {
    navigation.navigate('newMeal');
  }

  function handleGoToStatistic() {
    navigation.navigate('statistics');
  }

  function handleGoToMealInfo(id: string) {
    navigation.navigate('mealInfo', { id });
  }

  const renderItem = ({ item, index }: { item: MealStorageDTO; index: number }) => {
    const showDate = index === 0 || meals[index - 1].date !== item.date;
    const statusImg = item.isInDiet === 'yes' ? 'green' : 'red'; 

    return (
      <>
        {showDate && <MealDateTitle date={item.date} />}
        <MealCard
          hour={item.time}  
          mealName={item.name}  
          statusImg={statusImg}  
          onPress={() => handleGoToMealInfo(item.id)}
        />
      </>
    );
  };

  if (loading) {
    return (
      <S.Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </S.Container>
    );
  }


  const percentValue = meals.length === 0 ? 'Sem dados' : `${percent}%`;
  const percentColor = meals.length === 0 ? 'gray' : (parseFloat(percent) >= 70 ? 'green' : 'red');


  return (
    <S.Container>
      <Header />
      <DietProgress 
        percent={percentValue}
        onArrowPress={handleGoToStatistic} 
        backgroundStatus={percentColor}      
      />
      
      <S.Title>Refeições</S.Title>
      <Button type='TEXT' title='Nova refeição' onPress={handleGoToNewMeal}/>
      
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={renderItem}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </S.Container>
  );
}
