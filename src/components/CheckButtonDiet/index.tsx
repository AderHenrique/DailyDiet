import React, { useMemo } from 'react';

import * as S from './styles';

import RedStatus from '@assets/RedStatusButton.png';
import GreenStatus from '@assets/GreenStatusButton.png';

interface CheckButtonDietProps {
  status: 'yes' | 'no';
  isSelected: boolean;
  onSelect: () => void;
}

const CheckButtonDiet: React.FC<CheckButtonDietProps> = ({ status, isSelected, onSelect }) => {
  const { backgroundColor, text, borderColor } = useMemo(() => {
    if (isSelected) {
      if (status === 'yes') {
        return {
          backgroundColor: '#E5F0DB',
          borderColor: '#639339',
          text: 'Sim',
        };
      }
      return {
        backgroundColor: '#F4E6E7',
        borderColor: '#BF3B44',
        text: 'Não',
      };
    }
    return {
      backgroundColor: 'white',
      text: status === 'yes' ? 'Sim' : 'Não',
      borderColor: '#fff',
    };
  }, [status, isSelected]);

  return (
    <S.Container
      style={{ backgroundColor, borderColor, borderWidth: 1 }}
      onPress={onSelect}
    >
      <S.MealStatus source={status === 'yes' ? GreenStatus : RedStatus} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default CheckButtonDiet;
