import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import RoutesComponent from './pages/Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RoutesComponent />
      </Router>
    </>
  );
}

export default App;
