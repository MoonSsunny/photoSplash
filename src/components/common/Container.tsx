import styled from 'styled-components';
import { ChildrenProps } from 'models/photo';

const ContentSection = styled.section`
  max-width: 800px;
  height: 100%;
  padding: 50px 0;
  margin: 0 auto;
  position: relative;
`;

const Container = ({ children }: ChildrenProps) => {
  return <ContentSection>{children}</ContentSection>;
};

export default Container;
