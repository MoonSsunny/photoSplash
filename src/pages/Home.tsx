import styled from 'styled-components';
import Header from 'components/common/Header';
import { useNavigate } from 'react-router-dom';
import colors from 'utils/colors';
import Input from 'components/common/Input';
import PhotoList from 'components/PhotoList';
import Container from 'components/common/Container';
import { useEffect, useState } from 'react';
import { SearchItem } from 'models/search';

const Main = styled.div`
  height: 500px;
  background: url('background.jpg') center/cover no-repeat;
  color: ${colors.white};
`;

const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    font-size: 50px;
    font-family: 'BM Hanna';
    font-weight: bold;
    margin-bottom: 30px;
  }
  .subTitle {
    font-size: 15px;
    margin-bottom: 20px;
    text-align: left;
    p {
      margin-bottom: 10px;
    }
  }
`;

function Home() {
  const navigate = useNavigate();

  const [searchList, setSearchList] = useState<SearchItem[]>([]);

  useEffect(() => {
    setSearchList([
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 1,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 2,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 3,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 4,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 5,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 6,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 7,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 8,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 9,
      },
    ]);
  }, []);

  return (
    <>
      <Header onGoBookmark={() => navigate(`/bookmark`, { replace: true })} />
      <Main>
        <Container>
          <SearchInner>
            <h2 className="title">M.PHOTO</h2>
            <div className="subTitle">
              <p>인터넷 시각 자료의 출처입니다.</p>
              <p>모든 지역에 있는 크리에이터들의 지원을 받습니다.</p>
            </div>
            <Input placeholder="고해상도 이미지 검색" />
          </SearchInner>
        </Container>
      </Main>
      <Container>
        <PhotoList list={searchList}></PhotoList>
      </Container>
    </>
  );
}

export default Home;
