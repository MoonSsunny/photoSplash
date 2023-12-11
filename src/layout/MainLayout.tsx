import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from 'components/common/Header';
import Modal from 'components/common/Modal';
import { usePhoto } from 'contexts/PhotoContext';

export const MainLayout = () => {
  const navigate = useNavigate();
  const { isModal } = usePhoto();

  return (
    <>
      <Header
        onGoBookmark={() => navigate(`/bookmark`, { replace: true })}
        onSearchClick={() => navigate(`/`, { replace: true })}
      />
      <Outlet />
      {isModal && <Modal />}
    </>
  );
};
