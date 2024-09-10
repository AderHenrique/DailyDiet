import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export interface RoundedHeaderProps {
  backgroundStatus: 'green' | 'red' | 'gray';
  title?: string;
}

export const Container = styled.View<RoundedHeaderProps>`
  flex: 1;
  background-color: ${({ backgroundStatus, theme }) => 
    backgroundStatus === 'green' ? theme.COLORS.GREEN_MID : 
    backgroundStatus === 'red' ? theme.COLORS.RED_MID :
    theme.COLORS.GRAY_5
  };
  position: relative;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  padding-top: 70px;
  padding-bottom: 35px;
`;

export const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 24px;
`;

export const ArrowIcon = styled(ArrowLeft)<RoundedHeaderProps>`
  font-size: 26px; 
  color: ${({ backgroundStatus, theme }) =>
    backgroundStatus === 'green' ? theme.COLORS.GREEN_DARK : 
    backgroundStatus === 'red' ? theme.COLORS.RED_DARK : 
    theme.COLORS.GRAY_1
  }; 
`;
