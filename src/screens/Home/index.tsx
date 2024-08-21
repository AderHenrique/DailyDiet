import { Meals } from '@components/Meals';
import * as S from './styles'
import { Header } from '@components/Header';

export function Home() {
  return (
    <S.Container>
      <Header/>
      <Meals/>
    </S.Container>
  );
}