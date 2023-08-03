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
    color: "grey",
    background: "white",
    cardBackground: "white",
    iconColor: "lightgrey",
    inputBackground: "white",
    inputColor: "black",
  },
  dark: {
    color: "grey",
    background: "black",
    cardBackground: "rgb(38, 38, 38)",
    iconColor: "rgb(40, 40, 40)",
    inputBackground: "rgb(020,020,020)",
    inputColor: "white",
  }
}
export const SiteTheme = createContext<any>(themes.light)

// App
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<any>(JSON.parse(sessionStorage.getItem("userInfo") as string))

  const [htmlColor, setHtmlColor] = useState<string>("rgb(244,244,244)")
  useEffect(() => {
    darkMode
      ? setHtmlColor("rgb(020,020,020)")
      : setHtmlColor("rgb(244,244,244)")
  }, [darkMode])

  return (
    <div className="App" style={{ background: htmlColor as string, color: "grey", minHeight: "100vh" }}>
      <SiteTheme.Provider value={darkMode ? themes.dark : themes.light}>
        <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <UserContext.Provider value={[userInfo, setUserInfo]}>
            <BrowserRouter>
              <ToastContainer />
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Routes>
                <Route path='/' element={<Login setDarkMode={setDarkMode} />} />

                <Route path='/businesscards' element={<BusinessCards />} />

                <Route path='/exploreusers' element={<BusinessCards />} />

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

