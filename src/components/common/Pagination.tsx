import { useEffect, useState } from 'react';
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

const Text = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.gray03};
  text-align: center;
  margin-top: 30px;
`;

function Pagination({ total, page, totalPage, settingPage }: Props) {
  const [offset, setOffset] = useState<number>(0);
  const [pageArray, setPageArray] = useState<number[]>([]);

  const moveToPage = (page: number) => {
    settingPage(page);
  };

  useEffect(() => {
    const newOffset = Math.floor((page - 1) / pageArray.length);
    setOffset(newOffset);
  }, [page, pageArray.length]);

  useEffect(() => {
    const buttonNumber = Array.from(
      { length: 10 },
      (_, index) => 10 * offset + index + 1
    );
    setPageArray(buttonNumber);
  }, [offset]);

  return (
    <>
      <StyledPagination>
        <PaginationButton
          onClick={() => moveToPage(page === 1 ? page : page - 1)}
          disabled={page === 1}
        >
          이전
        </PaginationButton>
        {pageArray.map((item, index) => (
          <Button
            key={index}
            isBold={page === item}
            onClick={() => moveToPage(item)}
          >
            {item}
          </Button>
        ))}
        <PaginationButton
          onClick={() => moveToPage(page === totalPage ? page : page + 1)}
          disabled={page === totalPage}
        >
          다음
        </PaginationButton>
      </StyledPagination>
      <Text>
        {page} of {totalPage}
      </Text>
    </>
  );
}

export default Pagination;
