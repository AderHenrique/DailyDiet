import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as S from './styles';

interface InputTimeProps {
  value: string;
  onChange: (time: string) => void;
}

const InputTime: React.FC<InputTimeProps> = ({ value, onChange }) => {
  const [time, setTime] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedTime) {
      setTime(selectedTime);
      const hours = selectedTime.getHours().toString().padStart(2, '0');
      const minutes = selectedTime.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      onChange(formattedTime); // Atualiza o valor da hora no componente pai
    }
  };

  const showTimepicker = () => {
    setShow(true);
  };

  return (
    <S.Container>
      <TouchableOpacity onPress={showTimepicker}>
        <S.Input
          value={value}
          placeholder="00:00"
          pointerEvents="none"
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="timePicker"
          value={time}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </S.Container>
  );
};

export default InputTime;
