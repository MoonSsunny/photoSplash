import Header from 'components/common/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Container from 'components/common/Container';
import { useState } from 'react';
import Loading from 'components/common/Loading';
import PhotoList from 'components/PhotoList';
import NotSearchList from 'components/NotSearchList';
import { usePhoto } from 'contexts/PhotoContext';
import Modal from 'components/common/Modal';

const Bookmark = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { bookmarkList, isModal } = usePhoto();

  const navigate = useNavigate();

  return (
    <>
      <Header onSearchClick={() => navigate(`/`, { replace: true })} />
      <Container>
        {isLoading ? (
          <Loading />
        ) : bookmarkList?.length > 0 ? (
          <>
            <PhotoList photoListItem={bookmarkList} />
          </>
        ) : (
          <NotSearchList text={'북마크 되어있는것이 없습니다'} />
        )}
      </Container>
      {isModal && <Modal />}
    </>
  );
};

export default Bookmark;
