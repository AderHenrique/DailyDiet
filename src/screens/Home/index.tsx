import { AddMeal } from '@components/AddMeal';
import * as S from './styles'
import { Header } from '@components/Header';
import { MealCard } from '@components/MealCard';

export function Home() {
  return (
    <S.Container>
      <Header/>
      <AddMeal/>
      <MealCard/>
    </S.Container>
  );
}