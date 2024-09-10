import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 67px 24px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin-top: 32px;
  margin-bottom: 12px;
  `