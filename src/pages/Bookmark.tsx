import Header from 'components/common/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SearchItem } from 'models/photo';
import { useEffect, useState } from 'react';
import PhotoList from 'components/PhotoList';
import Container from 'components/common/Container';

function Bookmark() {
  const [searchList, setSearchList] = useState<SearchItem[]>([]);

  const navigate = useNavigate();

  return (
    <>
      <Header onSearchClick={() => navigate(`/`, { replace: true })} />
      <Container>
        <p>흐흐흐</p>
      </Container>
    </>
  );
}

export default Bookmark;
