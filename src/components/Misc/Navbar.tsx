// Navbar Layout:
// Toggle Light/Dark Mode
// Search Bar
// if no-user: Home | About | Sign-Up | Login >
// if account: Home | About | *Favorites*
// if business account: Home | About | Favorites | *My Cards*
// if admin account: Home | About | Favorites | My Cards | *CRM*

import { FunctionComponent, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginContext, SiteTheme, UserContext } from "../../App";

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: Function;
}

const Navbar: FunctionComponent<NavbarProps> = ({ darkMode, setDarkMode }) => {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
    const [userInfo, setUserInfo] = useContext(UserContext)
    const theme = useContext(SiteTheme)
    const navigate = useNavigate()

    sessionStorage.getItem("isLoggedIn") && setIsLoggedIn(true)

    return (
        <>
            {
                isLoggedIn &&
                <div><nav className="navbar py-3 navbar-expand-md" style={{ color: theme.color, background: theme.background }}>
                    <div className="container-fluid text-center">
                        {/* Brand */}
                        <Link className="navbar-brand fontGambetta" to="/home" style={{ color: theme.color }}>COMPANIX</Link>

                        {/* Collapse Btn */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Nav Extended */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Middle Btns */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item navHover">
                                    <NavLink className="nav-link" to="/businesscards" style={{ color: theme.color }}>Business Cards</NavLink>
                                </li>

                                <li className="nav-item d-none d-md-block">_____</li>

                                <li className="nav-item navHover">
                                    <NavLink className="nav-link" to="/exploreusers" style={{ color: theme.color }}>Explore Users</NavLink>
                                </li>

                                <li className="nav-item d-none d-md-block">_____</li>

                                <li className="nav-item navHover">
                                    <NavLink className="nav-link active" aria-current="page" to="/profile" style={{ color: theme.color }}>My Profile</NavLink>
                                </li>
                            </ul>

                            {/* Rightside Btns */}
                            <div className="d-flex flex-column flex-md-row align-items-center">
                                {/* Theme Changer */}
                                <li className="me-2 nav-item" style={{ listStyle: "none", cursor: "pointer" }} onClick={() => {
                                    setDarkMode(!darkMode)
                                }}>
                                    <i className="fa-solid fa-circle-half-stroke me-2"></i>
                                    {darkMode
                                        ? <span>Light Mode</span>
                                        : <span>Dark Mode</span>
                                    }

                                </li>
                                {/* Profile Icon */}
                                <li className="nav-item dropdown d-none d-md-block ms-3">
                                    <li className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" nav-link dropdown-toggle>
                                        {
                                            userInfo.imageUrl
                                                ? <img src={userInfo.imageUrl} alt="" className="rounded-5 m-0 p-0 myBorder" style={{ width: "2.3rem" }} />
                                                : <i className="fa-solid fa-circle-user rounded-5 m-0 p-0 myBorder" style={{ fontSize: "2rem" }}></i>
                                        }
                                    </li>
                                    {/* Dropdown Menu */}
                                    <ul className="dropdown-menu p-3 pb-4" style={{ left: "-6.5rem", top: "2.5rem", borderBlockColor: "grey", color: theme.color, background: theme.background }}>
                                        <Link to={"profile"} className="btn mb-2" style={{ marginLeft: "1.1rem", color: theme.color }}>My Profile</Link>
                                        <li className="btn btn-secondary" style={{ marginLeft: "1.7rem" }} onClick={() => {
                                            navigate("/")
                                            setIsLoggedIn("false")
                                        }}>Logout</li>
                                    </ul>
                                </li>

                                {/* Logout For Collapsed */}
                                <button className="btn btn-secondary d-inline-block me-2 mt-3 d-md-none" style={{ width: "4.8rem" }}>Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
                    {/* Nav Underline */}
                    <div className="navColorDiv"></div>
                    <div className="navColorDiv" style={{ opacity: 0.70 }}></div>
                    <div className="navColorDiv" style={{ opacity: 0.30 }}></div>
                </div>
            }
        </>
    )
}

export default Navbar;