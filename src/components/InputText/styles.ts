import styled from "styled-components/native";

interface InputProps {
  height: number;
}

export const Container = styled.View`
  width: 100%; 
  margin-bottom: 24px;
`;

export const StyledTextInput = styled.TextInput<InputProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  height: ${({ height }) => height}px;
  width: 100%; 
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
  text-align: start;
  padding: 14px;
`;
