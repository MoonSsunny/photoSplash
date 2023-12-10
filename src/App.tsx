import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import RoutesComponent from './pages/Routes';
import { PhotoProvider } from 'contexts/PhotoContext';

const App = () => {
  return (
    <PhotoProvider>
      <GlobalStyle />
      <Router>
        <RoutesComponent />
      </Router>
    </PhotoProvider>
  );
};

export default App;
