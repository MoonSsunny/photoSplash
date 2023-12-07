import Header from 'components/common/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SearchItem } from 'models/search';
import { useEffect, useState } from 'react';
import PhotoList from 'components/PhotoList';
import Container from 'components/common/Container';

function Bookmark() {
  const [searchList, setSearchList] = useState<SearchItem[]>([]);

  useEffect(() => {
    setSearchList([
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 1,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 2,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 3,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 4,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 5,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 6,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 7,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 8,
      },
      {
        path: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        id: 9,
      },
    ]);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header onSearchClick={() => navigate(`/`, { replace: true })} />
      <Container>
        <PhotoList list={searchList}></PhotoList>
      </Container>
    </>
  );
}

export default Bookmark;
