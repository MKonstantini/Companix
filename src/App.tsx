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
import User from './interfaces/User';


export const LoginContext = createContext<any>(false)
export const UserContext = createContext<any>({})

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<User | {}>({})

  return (
    <div className="App">
      <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <UserContext.Provider value={[userInfo, setUserInfo]}>
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
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
