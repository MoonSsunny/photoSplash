import styled from 'styled-components';

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .icon {
    width: 100px;
    height: auto;
  }
`;

const Loading = () => {
  return (
    <InfoSection>
      <img src="loading2.gif" alt="error" className="icon" />
    </InfoSection>
  );
};

export default Loading;
