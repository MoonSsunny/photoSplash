import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import Bookmark from 'pages/Bookmark';
import { MainLayout } from 'layout/MainLayout';

const RoutesComponent = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<MainLayout />}>
        <Route path="/*" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default RoutesComponent;
