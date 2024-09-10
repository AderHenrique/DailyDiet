import React from 'react';
import * as S from './styles';

interface InputProps {
  height: number;
  value: string;
  onChangeText: (text: string) => void;
}

const InputText: React.FC<InputProps> = ({ height, value, onChangeText }) =>{
  return (
    <S.Container>
      <S.StyledTextInput
        height={height}
        multiline
        value={value}
        onChangeText={onChangeText}
      />
    </S.Container>
  )
}

export default InputText;