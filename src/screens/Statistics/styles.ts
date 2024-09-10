import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export interface Props {
  backgroundStatus: 'green' | 'red' | 'gray';
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ backgroundStatus, theme }) => 
    backgroundStatus === 'green' ? theme.COLORS.GREEN_MID : 
    backgroundStatus === 'red' ? theme.COLORS.RED_MID : 
    theme.COLORS.GRAY_5
  };
`

export const Header = styled.View`
  width: 100%;
  height: 168px;
  padding-top: 72px;
  position: relative;
  align-items: center;
`

export const Percent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 12px;
`

export const ArrowButton = styled.TouchableOpacity`
  position: absolute;
  left: 27px;
  top: 60px;
`;

export const ArrowIcon = styled(ArrowLeft)<Props>`
  font-size: 26px;
  color: ${({ backgroundStatus, theme }) => 
    backgroundStatus === 'green' ? theme.COLORS.GREEN_DARK : 
    backgroundStatus === 'red' ? theme.COLORS.RED_DARK : 
    theme.COLORS.GRAY_1
  };
`;