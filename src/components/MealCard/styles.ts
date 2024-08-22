import styled from "styled-components/native";

export const Container = styled.View`

`

export const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-bottom: 12px;
`

export const MealContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 16px; 
`

export const MealTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`

export const Hour = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin-right: 8px; 
`

export const MealName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-left: 8px; 
`

export const MealStatus = styled.Image`
  width: 14px;
  height: 14px;
`