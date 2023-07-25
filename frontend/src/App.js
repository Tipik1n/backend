import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import PrivateRoutes from './utils/PrivateRoutes';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={ <PrivateRoutes />} >
            <Route element={<HomePage />} path="/" exact />
          </Route>
          <Route element={<LoginPage />} path="/login" exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
