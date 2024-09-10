import React from 'react';
import * as S from './styles';

interface DietSummaryProps {
  bestMealPlan: string;
  totalMeals: string;
  mealsInDiet: string;
  mealsOutOfDiet: string;
}

const DietSummary: React.FC<DietSummaryProps> = ({
  bestMealPlan,
  totalMeals,
  mealsInDiet,
  mealsOutOfDiet,
}) => {
  return (
    <S.Container>
      <S.Title>Estatísticas gerais</S.Title>
      <S.Number>{bestMealPlan}</S.Number>
      <S.Text>Melhor sequência de pratos dentro da dieta</S.Text>

      <S.Number>{totalMeals}</S.Number>
      <S.Text>Refeições registradas</S.Text>

      <S.MealsStatusContainer>
        <S.GreenMeals>
          <S.Number>{mealsInDiet}</S.Number>
          <S.Text>Refeições dentro da dieta</S.Text>
        </S.GreenMeals>
        <S.RedMeals>
          <S.Number>{mealsOutOfDiet}</S.Number>
          <S.Text>Refeições fora da dieta</S.Text>
        </S.RedMeals>
      </S.MealsStatusContainer>
    </S.Container>
  );
};

export default DietSummary;
