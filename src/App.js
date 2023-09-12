import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Forget from './Components/Forget';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/forget' element={<Forget/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
