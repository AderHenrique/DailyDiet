import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.View`
flex-direction: row;
justify-content: space-between;
`
export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`
export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
`

export const PercentContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  padding: 20px;
  height: 108px;
  align-items: center;
  position: relative;
`;

export const Percent = styled.Text`
  color: ${({ theme}) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`

export const Text = styled.Text`
  color: ${({ theme}) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 12px;
`;

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 26,
  color: theme.COLORS.GREEN_DARK,
}))``;