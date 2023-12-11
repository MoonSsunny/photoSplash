import { usePhoto } from 'contexts/PhotoContext';
import styled from 'styled-components';
import { ThumbnailProps } from 'models/photo';
import { getImageData } from 'api/searchApi';
import { MouseEventHandler, useEffect } from 'react';

const Thumbnail = styled.div<ThumbnailProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  .bookmark {
    display: inline-block;
    z-index: 100;
    position: absolute;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
  }
`;

const PhotoThumbnail = ({ size, src, photo }: ThumbnailProps) => {
  const {
    updateIsModal,
    updatePhotoItem,
    checkBookmark,
    updateBookmarkList,
    bookmarkList,
  } = usePhoto();

  const handleBookmark: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    checkBookmark(photo.id);
    updateBookmarkList(photo);
  };

  useEffect(() => {
    localStorage.setItem('bookmark', JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  const handleThumbnailClick = async () => {
    if (photo) {
      try {
        const imageData = await getImageData(photo.id);
        updatePhotoItem({
          ...photo,
          download: imageData.downloads.total,
        });
        updateIsModal(true);
      } catch (error) {
        console.error(error);
        alert('에러가 발생하였습니다. 잠시후 다시 시도해주세요');
      }
    }
  };

  return (
    <Thumbnail
      size={size}
      src={src}
      photo={photo}
      onClick={handleThumbnailClick}
    >
      <img
        src={photo?.isBookmark ? 'heart_fill.svg' : 'heart_line.svg'}
        alt="bookmark"
        className="bookmark"
        onClick={handleBookmark}
      />
    </Thumbnail>
  );
};

export default PhotoThumbnail;
