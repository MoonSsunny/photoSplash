import styled from 'styled-components';
import Header from 'components/common/Header';
import { useNavigate } from 'react-router-dom';
import colors from 'utils/colors';
import StyleInput from 'components/common/Input';
import PhotoList from 'components/PhotoList';
import Container from 'components/common/Container';
import { useCallback, useEffect, useState } from 'react';
import { SearchItem, Result } from 'models/search';
import { getSearchImage } from 'api/searchApi';
import NotSearchList from 'components/NotSearchList';
import Loading from 'components/common/Loading';
import Pagination from 'components/common/Pagination';
import { useSearchParams } from 'react-router-dom';

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
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [resultTotal, setResultTotal] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    // const count = 28;
    // const getImage = async () => {
    //   try {
    //     const randomImg = (await getRandomImage(count)).map((item) => ({
    //       url: item.urls.thumb,
    //       id: item.id,
    //     }));
    //     setSearchList(randomImg);
    //   } catch (error) {
    //     console.error('error');
    //   }
    // };
    // getImage();
  }, []);

  const handleChangeValue = (value: string) => {
    // setQuery(value);
  };

  const handleSearchList = useCallback(
    async (value: string) => {
      setQuery(value);
      console.log('value', value, 'page', page, 'per', perPage);
      try {
        setIsLoading(true);
        const searchImage: Result = await getSearchImage(value, page, perPage);
        console.log('result', searchImage);
        setResultTotal(searchImage.total);
        setTotalPage(searchImage.total_pages);
        const list = (
          searchImage.results as Array<{ id: string; urls: { thumb: string } }>
        ).map((item) => ({
          id: item.id,
          url: item.urls.thumb,
        }));
        console.log(list);
        setSearchList(list);
        setIsLoading(false);
      } catch (error) {
        console.error('error');
      }
    },
    [page, perPage]
  );

  const prePage = () => {
    setPage((prev: number) => (prev === 1 ? 1 : prev - 1));
  };

  useEffect(() => {
    handleSearchList(query);
  }, [page]);

  const nextPage = () => {
    setPage((prev: number) => (prev === totalPage ? prev : prev + 1));
  };

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
            <StyleInput
              placeholder="고해상도 이미지 검색"
              update={handleChangeValue}
              onSearch={handleSearchList}
            />
          </SearchInner>
        </Container>
      </Main>
      <Container>
        {isLoading ? (
          <Loading />
        ) : searchList.length > 0 ? (
          <>
            <PhotoList list={searchList}></PhotoList>
            <Pagination
              total={resultTotal}
              nextPage={nextPage}
              prePage={prePage}
              page={page}
            />
          </>
        ) : (
          <NotSearchList />
        )}
      </Container>
    </>
  );
}

export default Home;
