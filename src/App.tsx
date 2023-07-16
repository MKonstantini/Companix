import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, createContext } from 'react';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import BusinessCards from './components/BusinessCards/BusinessCards';
import MyCompany from './components/MyCompany/MyCompany';
import NoPage from './components/Misc/NoPage';
import Navbar from './components/Misc/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';


export const LoginContext = createContext<any>(false)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <div className="App">
      <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/home' element={<Home />} />
            <Route path='/mycompany' element={<MyCompany />} />
            <Route path='/businesscards' element={<BusinessCards />} />

            <Route path='*' element={<NoPage />} />
          </Routes>

        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
