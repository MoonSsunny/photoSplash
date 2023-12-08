import styled from 'styled-components';
import colors from 'utils/colors';

interface Props {
  total?: number;
  page: number;
  nextPage: () => void;
  prePage: () => void;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;

const PaginationButton = styled.button`
  margin-top: 20px;
  padding: 6px 12px;
  height: 32px;
  border-radius: 12px;
  background-color: ${colors.gray03};
  color: ${colors.white};
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    `
      background-color: ${colors.gray04};
      cursor: not-allowed;
      color: ${colors.gray05}
    `}
`;

function Pagination({ total, nextPage, prePage, page }: Props) {
  return (
    <StyledPagination>
      <PaginationButton onClick={prePage} disabled={page === 1}>
        이전
      </PaginationButton>
      <PaginationButton onClick={nextPage}>다음</PaginationButton>
    </StyledPagination>
  );
}

export default Pagination;
