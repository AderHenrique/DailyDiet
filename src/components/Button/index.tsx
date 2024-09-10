import { TouchableOpacityProps } from "react-native";
import { Plus, PencilLine, Trash } from 'phosphor-react-native';

import * as S from './styles';

type ButtonTypeStyleProps = 'ADD' | 'EDIT' | 'DELETE' | 'TEXT'; 

type Props = TouchableOpacityProps & {
  title: string;
  type: ButtonTypeStyleProps;
}

const iconMap: Record<ButtonTypeStyleProps, JSX.Element | null> = {
  ADD: <Plus size={18} color="white" />,
  EDIT: <PencilLine size={18} color="white" />,
  DELETE: <Trash size={18} color="#1E1E1E" />,
  TEXT: null, 
};

const Button = ({ title, type, ...rest }: Props) => {
  return (
    <S.Container type={type} {...rest}>
      {iconMap[type]}
      <S.Text type={type}>
        {title}
      </S.Text>
    </S.Container>
  );
}

export default Button;
