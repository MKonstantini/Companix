import { FunctionComponent } from "react";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <>
            <div className="row m-0">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <h1>Login</h1>
                </div>
                <div className="col-6"></div>
            </div>
        </>
    );
}

export default Login;