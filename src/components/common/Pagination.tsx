import { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';
import { PaginationProps } from 'models/photo';

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

const BoldButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 19px;
  &:hover {
    background-color: ${colors.gray04};
  }
`;
const NormalButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: normal;
  font-size: 14px;
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

const Pagination = ({ page, totalPage, settingPage }: PaginationProps) => {
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
      { length: totalPage >= 10 ? 10 : totalPage },
      (_, index) => 10 * offset + index + 1
    );
    setPageArray(buttonNumber);
  }, [offset, totalPage]);

  return (
    <>
      <StyledPagination>
        <PaginationButton
          onClick={() => moveToPage(page === 1 ? page : page - 1)}
          disabled={page === 1}
        >
          이전
        </PaginationButton>
        {pageArray.map((item, index) =>
          page === item ? (
            <BoldButton key={index} onClick={() => moveToPage(item)}>
              {item}
            </BoldButton>
          ) : (
            <NormalButton key={index} onClick={() => moveToPage(item)}>
              {item}
            </NormalButton>
          )
        )}
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
};

export default Pagination;
