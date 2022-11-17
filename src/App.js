import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { ExamplePortfolio } from './pages/ExamplePortfolio';
import HeaderApp from './components/HeaderApp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/ExamplePortfolio' element={<ExamplePortfolio />} />
    </Routes>
  );
}


export default App;
