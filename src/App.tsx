import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import BusinessCards from './components/BusinessCards/BusinessCards';
import MyCompany from './components/MyCompany/MyCompany';
import Register from './components/Login/Register';
import NoPage from './components/Misc/NoPage';
import Navbar from './components/Misc/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/home' element={<Home />} />
          <Route path='/mycompany' element={<MyCompany />} />
          <Route path='/businesscards' element={<BusinessCards />} />

          <Route path='*' element={<NoPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
