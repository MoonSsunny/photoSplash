import styled from 'styled-components';
import Header from 'components/common/Header';
import { useNavigate } from 'react-router-dom';

const Title = styled.h1``;

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header onGoBookmark={() => navigate(`/bookmark`, { replace: true })} />
      <Title>메인페이지입니다</Title>
    </>
  );
}

export default Home;
