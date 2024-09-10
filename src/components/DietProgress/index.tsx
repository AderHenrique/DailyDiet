import React from 'react';
import * as S from './styles';

interface DietProgressProps {
  percent: string;
  onArrowPress: () => void;
  backgroundStatus?: 'green' | 'red' | 'gray';
}

const DietProgress: React.FC<DietProgressProps> = ({ percent, onArrowPress, backgroundStatus = 'green' }) => {
  return (
    <S.Container backgroundStatus={backgroundStatus}>
      <S.Percent>{percent}</S.Percent>
      <S.Text>das refeições dentro da dieta</S.Text>
      <S.ArrowButton onPress={onArrowPress} accessibilityLabel="Voltar">
        <S.ArrowIcon backgroundStatus={backgroundStatus} />
      </S.ArrowButton>
    </S.Container>
  );
};

export default DietProgress;
