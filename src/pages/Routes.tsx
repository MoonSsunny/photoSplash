import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Home from 'pages/Home';

const RoutesComponent = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/*" element={<Home />} />
    </ReactRouterRoutes>
  );
};

export default RoutesComponent;
