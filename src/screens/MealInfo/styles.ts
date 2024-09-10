import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
`

export const BackgroundContainer = styled.View`
  background-color: ${({ theme}) => theme.COLORS.WHITE};
  position: absolute; 
  border-top-left-radius: 30px;
  border-top-right-radius: 30px; 
  margin-top: 120px;
  width: 100%;
  height: 100%;
  padding: 24px;
`

export const TextBig = styled.Text`
  margin-top: 26px;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`

export const TextMedium = styled.Text`
  margin-top: 26px;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const TextSmall = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const MealStatus = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 26px;
  margin-left: 16px;
  gap: 12px;
`

export const Image = styled.Image`
  vertical-align: middle;
`

export const ContainerButton = styled.View`
  padding-top: 250px;
  width: 350px;
  margin: 0 auto;
  margin-top: 100px;
  gap: 12px;
`
