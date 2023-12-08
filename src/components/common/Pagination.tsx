import styled from 'styled-components';
import colors from 'utils/colors';

interface Props {
  total: number;
  page: number;
  totalPage: number;
  settingPage: (page: number) => void;
}

interface ButtonProps {
  isBold?: boolean;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

const PaginationButton = styled.button`
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

const Button = styled.button<ButtonProps>`
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  font-size: ${(props) => (props.isBold ? '19px' : 'normal')};
  &:hover {
    background-color: ${colors.gray04};
  }
`;

function Pagination({ total, page, totalPage, settingPage }: Props) {
  const buttonNumber = Array.from({ length: 10 });

  const moveToPage = (page: number) => {
    settingPage(page);
  };

  return (
    <StyledPagination>
      <PaginationButton
        onClick={() => moveToPage(page === 1 ? page : page - 1)}
        disabled={page === 1}
      >
        이전
      </PaginationButton>
      {buttonNumber.map((item, index) => (
        <Button
          key={index}
          isBold={page === index + 1}
          onClick={() => moveToPage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <PaginationButton
        onClick={() => moveToPage(page === totalPage ? page : page + 1)}
        disabled={page === totalPage}
      >
        다음
      </PaginationButton>
    </StyledPagination>
  );
}

export default Pagination;
