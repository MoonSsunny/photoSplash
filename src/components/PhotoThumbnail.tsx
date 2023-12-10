import { usePhoto } from 'contexts/PhotoContext';
import styled from 'styled-components';
import { ThumbnailProps } from 'models/photo';
import { getImageData } from 'api/searchApi';

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

function PhotoThumbnail({ size, src, photo }: ThumbnailProps) {
  const { updateIsModal, updatePhotoItem } = usePhoto();

  const handleBookmark = () => {
    console.log('dkdk');
  };

  const handleThumbnailClick = async () => {
    if (photo) {
      const imageData = await getImageData(photo.id);
      updatePhotoItem({ ...photo, download: imageData.downloads.total });
      updateIsModal(true);
    }
  };

  return (
    <Thumbnail size={size} src={src} onClick={handleThumbnailClick}>
      <img
        src="heart_line.svg"
        alt="bookmark"
        className="bookmark"
        onClick={handleBookmark}
      />
    </Thumbnail>
  );
}

export default PhotoThumbnail;
