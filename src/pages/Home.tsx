import styled from 'styled-components';
import Header from 'components/common/Header';
import { useNavigate } from 'react-router-dom';
import colors from 'utils/colors';
import Input from 'components/common/Input';

const Main = styled.div`
  height: 500px;
  background-color: #000;
  color: ${colors.white};
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  position: relative;
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

  return (
    <>
      <Header onGoBookmark={() => navigate(`/bookmark`, { replace: true })} />
      <Main>
        <Inner>
          <SearchInner>
            <h2 className="title">M.PHOTO</h2>
            <div className="subTitle">
              <p>인터넷 시각 자료의 출처입니다.</p>
              <p>모든 지역에 있는 크리에이터들의 지원을 받습니다.</p>
            </div>
            <Input placeholder="고해상도 이미지 검색" />
          </SearchInner>
        </Inner>
      </Main>
    </>
  );
}

export default Home;
