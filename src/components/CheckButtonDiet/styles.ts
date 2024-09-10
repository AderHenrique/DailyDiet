import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  justify-content: center;
  padding: 0 10px;
  width: 150px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-left: 8px;
`;

export const MealStatus = styled.Image`
  width: 14px;
  height: 14px;
`;
