import { TouchableOpacityProps } from "react-native";
import { Plus, PencilLine, Trash } from 'phosphor-react-native';

import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string;
  type: S.ButtonTypeStyleProps;
}
const iconMap = {
  ADD: <Plus size={18} color="white" />,
  EDIT: <PencilLine size={18} color="#1E1E1E" />,
  DELETE: <Trash size={18} color="white" />,
};

export function Button({ title, type, ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      {type !== 'TEXT' ? iconMap[type] : null}
      <S.Text type={type}>
        {title}
      </S.Text>
    </S.Container>
  );
}