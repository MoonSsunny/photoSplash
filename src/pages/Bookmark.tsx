import Container from 'components/common/Container';
import PhotoList from 'components/PhotoList';
import NotSearchList from 'components/NotSearchList';
import { usePhoto } from 'contexts/PhotoContext';

const Bookmark = () => {
  const { bookmarkList } = usePhoto();

  return (
    <>
      <Container>
        {bookmarkList?.length > 0 ? (
          <>
            <PhotoList photoListItem={bookmarkList} />
          </>
        ) : (
          <NotSearchList text={'북마크 되어있는것이 없습니다'} />
        )}
      </Container>
    </>
  );
};

export default Bookmark;
