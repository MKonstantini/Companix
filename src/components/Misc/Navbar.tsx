// Navbar Layout:
// Toggle Light/Dark Mode
// Search Bar
// if no-user: Home | About | Sign-Up | Login >
// if account: Home | About | *Favorites*
// if business account: Home | About | Favorites | *My Cards*
// if admin account: Home | About | Favorites | My Cards | *CRM*

import { FunctionComponent, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
    const navigate = useNavigate()

    sessionStorage.getItem("isLoggedIn") && setIsLoggedIn(true)

    return (
        <>
            {
                isLoggedIn &&
                <div><nav className="navbar py-3 navbar-expand-md bg-body-tertiary">
                    <div className="container-fluid">

                        {/* Brand */}
                        <Link className="navbar-brand fontGambetta" to="/home">COMPANIX</Link>

                        {/* Collapse Btn */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Content */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Middle Btns */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item navHover">
                                    <NavLink className="nav-link" to="/businesscards">Business Cards</NavLink>
                                </li>

                                <li className="nav-item">_____</li>

                                <li className="nav-item navHover">
                                    <NavLink className="nav-link active" aria-current="page" to="/profile">Profile</NavLink>
                                </li>
                            </ul>

                            {/* Rightside Btns */}
                            <div>
                                <button className="btn btn-outline-secondary me-2">Mode</button>
                                <button className="btn btn-outline-secondary" onClick={() => {
                                    navigate("/")
                                    setIsLoggedIn("false")
                                }}
                                >Logout</button>
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