import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 22px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-bottom: 12px;
  margin-top: 12px;
`;