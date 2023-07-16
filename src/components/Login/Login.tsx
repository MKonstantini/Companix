import { FunctionComponent, useContext, useEffect, useRef, useState } from "react";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { LoginContext } from "../../App";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)

    //Reset Login Session
    sessionStorage.clear()
    setIsLoggedIn(false)

    // State for selected Loggin/Register
    const [selectedMenu, setSelectedMenu] = useState<string>("loggin")

    // Ref for Loggin/Register buttons
    const loginBtn = useRef<HTMLButtonElement>(null)
    const registerBtn = useRef<HTMLButtonElement>(null)

    // Effect on Loggin/Register
    useEffect(() => {
        if (selectedMenu === "loggin") {
            (loginBtn.current as HTMLButtonElement).style.fontWeight = 'bold';
            (registerBtn.current as HTMLButtonElement).style.fontWeight = 'normal';
        }
        else {
            (loginBtn.current as HTMLButtonElement).style.fontWeight = 'normal';
            (registerBtn.current as HTMLButtonElement).style.fontWeight = 'bold';
        }
    })

    // On Loggin/Register click
    function clickLogin() {
        setSelectedMenu("loggin")
    }
    function clickRegister() {
        setSelectedMenu("register")
    }

    return (
        <>
            <div className="row m-0 vh-100 ">
                {/* Cover Img */}
                <div className="d-none d-sm-block col-sm-4 col-md-6 loginCover"></div>

                <div className="col-sm-8 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    {/* Title */}
                    <div className="my-5 d-flex flex-column align-items-center">
                        <h1 className="fontGambetta" style={{ fontWeight: 700 }}>COMPANIX</h1>
                        <i className="fontGambetta" style={{ fontWeight: 601 }}>It's Just Good Business.</i>
                    </div>
                    {/* Menu */}
                    <div className="myBorder px-4 pt-1 mx-4 mb-4">
                        {/* Menu Btns */}
                        <div className="row mx-2 mt-2">
                            <button className="col-6" ref={loginBtn} onClick={clickLogin} style={{ fontWeight: 'bold' }}>
                                <p className="m-0">Login</p>
                            </button>
                            <button className="col-6" ref={registerBtn} onClick={clickRegister}>
                                <p className="m-0">Register</p>
                            </button>
                        </div>
                        <hr />
                        {/* Forms */}
                        {selectedMenu === "loggin" && <FormLogin />}
                        {selectedMenu === "register" && <FormRegister />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;