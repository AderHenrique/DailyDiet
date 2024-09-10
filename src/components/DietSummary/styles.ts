import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Number = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 12px;
  text-align: center;
`;

export const MealsStatusContainer = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
  gap: 20%;
`;

export const GreenMeals = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  height: 107px;
  width: 40%;
`;

export const RedMeals = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED_MID};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  height: 107px;
  width: 40%;
`;
