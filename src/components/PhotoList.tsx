import styled from 'styled-components';
import PhotoThumbnail from './PhotoThumbnail';
import { SearchItem } from 'models/search';

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

function PhotoList({ list }: { list: SearchItem[] }) {
  return (
    <StyledUl>
      {list.map((item) => (
        <StyledLi key={item.id}>
          <PhotoThumbnail src={item.url} size={200} />
        </StyledLi>
      ))}
    </StyledUl>
  );
}

export default PhotoList;
