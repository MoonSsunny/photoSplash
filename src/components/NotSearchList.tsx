import styled from 'styled-components';
import colors from 'utils/colors';

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 300px;
  .icon {
    width: 60px;
    height: auto;
  }
  .text {
    font-family: '';
    font-size: 18px;
    text-align: center;
    line-height: 36px;
    color: ${colors.gray01};
  }
`;

function NotSearchList() {
  return (
    <InfoSection>
      <img src="Error.svg" alt="error" className="icon" />
      <p className="text">
        검색결과가 없습니다. <br /> 검색을 통해 이미지를 찾아보세요
      </p>
    </InfoSection>
  );
}

export default NotSearchList;
