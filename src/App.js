import GlobalStyle from './globalStyles';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
