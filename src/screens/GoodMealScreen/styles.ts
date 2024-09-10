import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: #F5F5F5;
  align-items: center;
  padding: 32px;
  margin-top: 160px;
`;

export const Title = styled.Text`
  font-family: ${({ theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};

  margin-bottom: 12px;
`;

export const Text = styled.Text`
  font-family: ${({ theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  text-align: center;
  margin-bottom: 40px;
`
export const Image = styled.Image`

`
export const BoldText = styled(Text)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContainerButton = styled.View`
  width: 191px;
  margin: 0 auto;
  margin-top: 40px;
`