import styled from 'styled-components';
import colors from 'utils/colors';

interface Props {
  onSearchClick?: () => void;
  onGoBookmark?: () => void;
}

const HeaderContainer = styled.header`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.gray};
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font-family: 'BM Hanna';
  font-size: 25px;
  cursor: pointer;
  img {
    width: 80px;
  }
`;

const Bookmark = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 16px;
  gap: 3px;
  width: 90px;
  height: 30px;
  border: 1px solid ${colors.gray};
  cursor: pointer;
  border-radius: 4px;
  color: ${colors.gray01};
  img {
    display: inline-block;
    width: 15px;
  }
`;

function Header({ onSearchClick, onGoBookmark }: Props) {
  return (
    <HeaderContainer>
      <Logo onClick={onSearchClick}>
        <img src="logo.png" alt="로고" />
        <span>PHOTO</span>
      </Logo>
      <Bookmark onClick={onGoBookmark}>
        <span>북마크</span>
        <img src="like.svg" alt="하트" />
      </Bookmark>
    </HeaderContainer>
  );
}

export default Header;
