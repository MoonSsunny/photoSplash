import styled from 'styled-components';

interface ThumbnailProps {
  size: number;
  src: string;
}
const Thumbnail = styled.div<ThumbnailProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .bookmark {
    display: inline-block;
    z-index: 100;
    position: absolute;
    bottom: 20px;
    right: 10px;
    cursor: pointer;
  }
`;

const handleBookmark = () => {
  console.log('dkdk');
};

function PhotoThumbnail({ size, src }: ThumbnailProps) {
  return (
    <Thumbnail size={size} src={src}>
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
