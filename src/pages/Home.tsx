import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import colors from 'utils/colors';
import StyleInput from 'components/common/Input';
import PhotoList from 'components/PhotoList';
import Container from 'components/common/Container';
import { useEffect, useState } from 'react';
import { Result } from 'models/photo';
import { getSearchImage } from 'api/searchApi';
import NotSearchList from 'components/NotSearchList';
import Loading from 'components/common/Loading';
import Pagination from 'components/common/Pagination';
import { usePhoto } from 'contexts/PhotoContext';

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

const Home = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [totalPage, setTotalPage] = useState<number>(0);
  const { updatePhotoList, photoList } = usePhoto();

  const handleSearchList = async (value: string, type?: string) => {
    const perPage = 20;
    setQuery(value);
    value
      ? navigate(`/search?query=${value}&page=${page}&limit=${perPage}`)
      : navigate('/');
    if (value !== query) setPage(1);
    if (type !== 'pageButton') setPage(1);
    try {
      setIsLoading(true);
      const searchImage: Result = await getSearchImage(value, page, perPage);
      setTotalPage(searchImage.total_pages);
      const list = (
        searchImage.results as Array<{
          id: string;
          urls: { small: string; thumb: string };
          alt_description: string;
          tags: object[];
          user: { name: string };
          width: number;
          height: number;
          created_at: string;
        }>
      ).map((item) => ({
        id: item.id,
        url: item.urls.small,
        thumbs: item.urls.thumb,
        alt: item.alt_description,
        tag: item.tags,
        user: item.user.name,
        width: item.width,
        height: item.height,
        update: item.created_at,
        isBookmark: false,
      }));
      updatePhotoList(list);
      setIsLoading(false);
    } catch (error) {
      console.error('error');
    }
  };
  const settingPage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    handleSearchList(query, 'pageButton');
  }, [page]);

  return (
    <>
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
              onSearch={handleSearchList}
            />
          </SearchInner>
        </Container>
      </Main>
      <Container>
        {isLoading ? (
          <Loading />
        ) : photoList?.length > 0 ? (
          <>
            <PhotoList photoListItem={photoList} />
            <Pagination
              settingPage={settingPage}
              page={page}
              totalPage={totalPage}
            />
          </>
        ) : (
          <NotSearchList text={'검색결과가 없습니다 '} />
        )}
      </Container>
    </>
  );
};

export default Home;
