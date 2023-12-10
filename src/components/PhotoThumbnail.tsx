import { usePhoto } from 'contexts/PhotoContext';
import styled from 'styled-components';
import { ThumbnailProps } from 'models/photo';
import { getImageData } from 'api/searchApi';
import { MouseEventHandler, useState } from 'react';

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
  const { updateIsModal, updatePhotoItem } = usePhoto();
  const [isBookmark, setIsBookmark] = useState<boolean>(false);

  const handleBookmark: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    setIsBookmark(!isBookmark);
  };

  const handleThumbnailClick = async () => {
    if (photo) {
      const imageData = await getImageData(photo.id);
      updatePhotoItem({
        ...photo,
        download: imageData.downloads.total,
      });
      updateIsModal(true);
    }
  };

  return (
    <Thumbnail size={size} src={src} onClick={handleThumbnailClick}>
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
