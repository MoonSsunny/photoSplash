import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import Bookmark from 'pages/Bookmark';

const RoutesComponent = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/*" element={<Home />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </ReactRouterRoutes>
  );
};

export default RoutesComponent;
