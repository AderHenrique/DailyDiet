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
export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin-bottom: 6px;
`;


export const DateTimeContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  gap: 32px;

`

export const DataContainer = styled.View`
width: 45%;
`;

export const TimeContainer = styled.View`
width: 45%;
`;

export const InputDietContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 350px;
  margin: 0 auto;
  margin-top: 100px;
`