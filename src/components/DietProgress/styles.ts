import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

interface ContainerProps {
  backgroundStatus: 'green' | 'red' | 'gray';
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ backgroundStatus, theme }) => 
    backgroundStatus === 'green' ? theme.COLORS.GREEN_MID : 
    backgroundStatus === 'red' ? theme.COLORS.RED_MID : 
    theme.COLORS.GRAY_5
  };
  border-radius: 8px;
  padding: 20px;
  height: 108px;
  align-items: center;
  position: relative;
  margin-top: 24px;
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
  right: 16px;
  top: 12px;
  position: absolute;
`;

export const ArrowIcon = styled(ArrowUpRight)<ContainerProps>`
  font-size: 26px; 
  color: ${({ backgroundStatus, theme }) =>
    backgroundStatus === 'green' ? theme.COLORS.GREEN_DARK : 
    backgroundStatus === 'red'? theme.COLORS.RED_DARK : 
    theme.COLORS.GRAY_1}; 
`;