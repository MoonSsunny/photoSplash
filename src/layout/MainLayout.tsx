import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from 'components/common/Header';

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        onGoBookmark={() => navigate(`/bookmark`, { replace: true })}
        onSearchClick={() => navigate(`/`, { replace: true })}
      />
      <Outlet />
    </>
  );
};
