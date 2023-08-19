import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import { Routes,Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLogin,setIsLogin] = useState(false);

  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={isLogin ? <Navigate to='/profile' /> : <Login setIsLogin={setIsLogin} />} />
      <Route path='/profile' element={isLogin ? <Profile /> : <Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
