import styled from 'styled-components';
import colors from 'utils/colors';

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
  gap: 3px;
  width: 90px;
  height: 30px;
  border: 1px solid ${colors.gray};
  cursor: pointer;
  border-radius: 4px;
  color: ${colors.gray01};
  img {
    width: 15px;
  }
`;

interface Props {
  onSearchClick?: () => void;
  onGoBookmark?: () => void;
}

function Header({ onSearchClick, onGoBookmark }: Props) {
  return (
    <HeaderContainer>
      <Logo onClick={onSearchClick}>
        <img src="logo.png" alt="로고" />
        <span>willog</span>
      </Logo>
      <Bookmark onClick={onGoBookmark}>
        <span>북마크</span>
        <img src="like.svg" alt="하트" />
      </Bookmark>
    </HeaderContainer>
  );
}

export default Header;