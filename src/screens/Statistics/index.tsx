import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import DietSummary from '@components/DietSummary';
import { calculateStats } from '@storage/meal/calculateMealStats';

interface StatisticsProps {}

export const Statistics: React.FC<StatisticsProps> = () => {
  const navigator = useNavigation();
  const [stats, setStats] = useState({
    percent: '0.00%',
    totalMeals: 0,
    mealsInDiet: 0,
    mealsOutOfDiet: 0,
    bestMealPlan: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const calculatedStats = await calculateStats();
      setStats(calculatedStats);
    }

    loadStats();
  }, []);

  function handleGoToHome() {
    navigator.navigate('home');
  }
  
  const percentValue = stats.totalMeals === 0 ? 'Sem dados' : `${stats.percent}%`;
  const percentColor = stats.totalMeals === 0
    ? 'gray'
    : (parseFloat(stats.percent) >= 70 ? 'green' : 'red');

  return (
    <S.Container backgroundStatus={percentColor}>
      <S.Header>
        <S.Percent>{percentValue}</S.Percent>
        <S.Text>das refeições dentro da dieta</S.Text>
        <S.ArrowButton onPress={handleGoToHome}>
          <S.ArrowIcon backgroundStatus={percentColor} />
        </S.ArrowButton>
      </S.Header>
      <DietSummary
        bestMealPlan={stats.bestMealPlan.toString()}
        totalMeals={stats.totalMeals.toString()}
        mealsInDiet={stats.mealsInDiet.toString()}
        mealsOutOfDiet={stats.mealsOutOfDiet.toString()}
      />
    </S.Container>
  );
}
