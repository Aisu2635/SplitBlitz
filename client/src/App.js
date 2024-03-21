import React from 'react';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dash from './components/dash';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/Dashboard' element={<Dash/>}/>
  <Route path='/*' element={<err/>}/>
  </Routes>
</>
  );
}

export default App;
