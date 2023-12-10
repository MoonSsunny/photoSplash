import styled from 'styled-components';
import PhotoThumbnail from './PhotoThumbnail';
import { PhotoListProps } from 'models/photo';

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  align-content: space-around;
  justify-items: center;
`;

const StyledLi = styled.li`
  width: 200px;
`;

const PhotoList = ({ photoListItem }: PhotoListProps) => {
  return (
    <StyledUl>
      {photoListItem.map((item) => (
        <StyledLi key={item.id}>
          <PhotoThumbnail photo={item} size={200} src={item.thumbs} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default PhotoList;
