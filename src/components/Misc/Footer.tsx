import { FunctionComponent, useContext } from "react";
import { LoginContext, UserContext } from "../../App";
import { Link } from "react-router-dom";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
    const [userInfo, setUserInfo] = useContext(UserContext)
    sessionStorage.getItem("isLoggedIn") && setIsLoggedIn(true)

    return (
        <>
            {
                isLoggedIn &&
                <footer className="py-5 w-100">
                    <div className="d-flex">
                        <div className="mx-auto px-3" style={{ color: "grey" }}>
                            <h6>Companix</h6>
                            <p className="mb-0">Created By Matan Konstantini.</p>
                            <p className="mb-0">Coded using React TypeScript.</p>
                            <p className="mb-0">Images from Unsplash.</p>

                        </div>
                        <div className="mx-auto px-3" style={{ color: "grey" }}>
                            <h6>Sections</h6>
                            <div>
                                <Link to={"/businesscards"} style={{ textDecoration: "none", color: "grey" }}>Business Cards</Link>
                            </div>
                            {
                                userInfo.accountType === "Business" &&
                                <div>
                                    <Link to={"/businesscards"} onClick={() => {
                                        // sessionStorage.setItem()
                                    }} style={{ textDecoration: "none", color: "grey" }}>Company Cards</Link>
                                </div>
                            }
                            <div>
                                <Link to={"/profile"} style={{ textDecoration: "none", color: "grey" }}>Profile</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            }


        </>
    );
}

export default Footer;