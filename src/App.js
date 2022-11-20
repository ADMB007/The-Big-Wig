import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { ExamplePortfolio } from './pages/ExamplePortfolio';
import { Signup } from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/ExamplePortfolio' element={<ExamplePortfolio />} />
      <Route path='/Events' element={<Home />} />
      <Route path='/Tutorials' element={<Home />} />
    </Routes>
  );
}


export default App;
