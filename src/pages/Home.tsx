import styled from 'styled-components';
import Header from 'components/common/Header';

const Title = styled.h1``;

const Home = () => {
  return (
    <>
      <Header></Header>
      <Title>This is home component</Title>
    </>
  );
};

export default Home;
