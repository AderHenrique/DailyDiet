import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'TEXT' | 'EDIT' | 'DELETE' | 'ADD'; 

type Props = {
  type: ButtonTypeStyleProps,
}

export const Container = styled(TouchableOpacity) <Props>`
  flex-direction: row; 
  align-items: center;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, type }) => type === 'EDIT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  border-radius: 6px;
  justify-content: center;
  padding: 0 10px; 

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_2};
`;

export const Text = styled.Text<Props>`
  color: ${({ theme, type }) => type === 'EDIT' ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-left: 8px; 
`;