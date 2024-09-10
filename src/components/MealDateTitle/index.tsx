import * as S from './styles';

interface MealDateTitleProps {
  date: string;
}


const MealDateTitle: React.FC<MealDateTitleProps> = ({ date }) => {
  return( 
    <S.Container>
      <S.Date>{date}</S.Date>
    </S.Container>
  );
}

export default MealDateTitle;
