import Header from 'components/common/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1``;

function Bookmark() {
  const navigate = useNavigate();

  return (
    <>
      <Header onSearchClick={() => navigate(`/`, { replace: true })} />
      <Title>북마크 페이지입니다</Title>
    </>
  );
}

export default Bookmark;
