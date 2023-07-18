import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, createContext } from 'react';
import { ToastContainer } from 'react-toastify';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import BusinessCards from './components/BusinessCards/BusinessCards';
import MyCompany from './components/MyCompany/MyCompany';
import NoPage from './components/Misc/NoPage';
import Navbar from './components/Misc/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import User from './interfaces/User';
import ViewCard from './components/Home/ViewCard';
import EditCard from './components/Home/EditCard';
import About from './components/Home/About';


export const LoginContext = createContext<any>(false)
export const UserContext = createContext<any>({})

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<any>(JSON.parse(sessionStorage.getItem("userInfo") as string))

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
              <Route path='/viewcard/:id' element={<ViewCard />} />
              <Route path='/editcard/:type' element={<EditCard />} />
              <Route path='/about' element={<About />} />

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
