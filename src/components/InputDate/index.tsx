import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import * as S from './styles';

interface InputDateProps {
  value: string;
  onChange: (date: string) => void;
}

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const InputDate: React.FC<InputDateProps> = ({ value, onChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = useCallback((event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      onChange(formatDate(selectedDate));
    }
  }, [onChange]);

  const showDatepicker = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <S.Container>
      <TouchableOpacity onPress={showDatepicker}>
        <S.Input
          value={value}
          placeholder="00/00/0000"
          pointerEvents="none"
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </S.Container>
  );
};

export default InputDate;
