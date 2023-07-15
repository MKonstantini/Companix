// Navbar Layout:

// Toggle Light/Dark Mode
// Search Bar

// if no-user: Home | About | Sign-Up | Login >
// if account: Home | About | *Favorites*
// if business account: Home | About | Favorites | *My Cards*
// if admin account: Home | About | Favorites | My Cards | *CRM*

import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

interface NavbarProps {
    isLoggedIn: boolean;
}

const Navbar: FunctionComponent<NavbarProps> = ({ isLoggedIn }) => {
    return (
        <>
            {
                isLoggedIn &&
                <nav className="navbar py-3 navbar-expand-md bg-body-tertiary">
                    <div className="container-fluid">

                        {/* Brand */}
                        <Link className="navbar-brand fontGambetta" to="/">COMPANIX</Link>

                        {/* Collapse Btn */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Content */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Middle Btns */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>

                                <li className="nav-item">_____</li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/mycompany">My Company</NavLink>
                                </li>

                                <li className="nav-item">_____</li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/businesscards">Business Cards</NavLink>
                                </li>
                            </ul>

                            {/* Rightside Btns */}
                            <div>
                                <button className="btn btn-outline-secondary me-2">Mode</button>
                                <button className="btn btn-outline-secondary">Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>

            }
        </>
    )
}

export default Navbar;