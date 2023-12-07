import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const ContentSection = styled.section`
  max-width: 900px;
  height: 100%;
  padding: 50px 0;
  margin: 0 auto;
  position: relative;
`;

function Container({ children }: Props) {
  return <ContentSection>{children}</ContentSection>;
}

export default Container;
