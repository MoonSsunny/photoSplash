import styled from 'styled-components';
import colors from 'utils/colors';

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

function Loading() {
  return (
    <InfoSection>
      <img src="loading2.gif" alt="error" className="icon" />
    </InfoSection>
  );
}

export default Loading;
