import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { RoundedHeaderProps } from './styles';

const RoundedHeader: React.FC<RoundedHeaderProps> = ({ backgroundStatus, title }) => {
  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate('home');
  }

  return (
    <S.Container backgroundStatus={backgroundStatus}>
      <S.Header>
        <S.ArrowButton onPress={handleGoToHome}>
          <S.ArrowIcon backgroundStatus={backgroundStatus} />
        </S.ArrowButton>
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.Header>
    </S.Container>
  );
};

export default RoundedHeader;
