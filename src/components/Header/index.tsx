import * as S from './styles';

import logoImg from '@assets/logo.png';
import profileImg from '@assets/profilePic.png';

const Header = () => {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      <S.ProfilePicture source={profileImg} />
    </S.Container>
  );
};

export default Header;
