import React, { useMemo } from 'react';
import { LineVertical } from 'phosphor-react-native';

import * as S from './styles';

import greenStatusImg from '@assets/GreenStatus.png';
import redStatusImg from '@assets/RedStatus.png';

interface MealCardProps {
  hour: string;
  mealName: string;
  statusImg: 'green' | 'red';
  onPress: () => void;
}

const MealCard: React.FC<MealCardProps> = ({ hour, mealName, statusImg, onPress }) => {
  const statusImage = useMemo(() => {
    return statusImg === 'green' ? greenStatusImg : redStatusImg;
  }, [statusImg]);

  return (
    <S.Container onPress={onPress}>
      <S.MealTextContainer>
        <S.Hour>{hour}</S.Hour>
        <LineVertical size={22} color="#B9BBBC" />
        <S.MealName>{mealName}</S.MealName>
      </S.MealTextContainer>
      <S.MealStatus source={statusImage} />
    </S.Container>
  );
};

export default MealCard;
