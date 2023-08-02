import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';

import BusinessCards from './components/BusinessCards/BusinessCards';
import NoPage from './components/Misc/NoPage';
import Navbar from './components/Misc/Navbar';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import ViewCard from './components/Profile/ViewCard';
import EditCard from './components/Profile/EditCard';
import About from './components/Profile/About';
import Footer from './components/Misc/Footer';

// login status and user info context
export const LoginContext = createContext<any>(false)
export const UserContext = createContext<any>({})

// light/dark mode context
const themes = {
  light: {
    color: "black",
    background1: "white",
    background2: "rgb(247, 247, 247)"
  },
  dark: {
    color: "white",
    background1: "black",
    background2: "black"
  }
}
export const SiteTheme = createContext<any>(themes.light)

// App
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<any>(JSON.parse(sessionStorage.getItem("userInfo") as string))

  const [htmlColor, setHtmlColor] = useState<string>("rgb(020,020,020)")
  useEffect(() => {
    darkMode
      ? setHtmlColor("rgb(020,020,020)")
      : setHtmlColor("rgb(244,244,244)")
    console.log(darkMode)
  }, [darkMode])


  return (
    <div className="App" style={{ background: htmlColor as string, color: "grey" }}>
      <SiteTheme.Provider value={darkMode ? themes.dark : themes.light}>
        <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <UserContext.Provider value={[userInfo, setUserInfo]}>
            <BrowserRouter>
              <ToastContainer />
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Routes>
                <Route path='/' element={<Login />} />

                <Route path='/businesscards' element={<BusinessCards />} />

                <Route path='/profile' element={<Profile />} />
                <Route path='/viewcard/:id' element={<ViewCard />} />
                <Route path='/editcard/:type' element={<EditCard />} />
                <Route path='/about' element={<About />} />

                <Route path='*' element={<NoPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </UserContext.Provider>
        </LoginContext.Provider>
      </SiteTheme.Provider>
    </div >
  );
}

export default App;

