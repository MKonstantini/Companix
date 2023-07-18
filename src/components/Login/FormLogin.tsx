import { alertError, alertSuccess } from "../../services/alertFunctions";
import { getUser, } from "../../services/dbFunctions";
import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"

import { LoginContext, UserContext } from "../../App";

interface FormLoginProps {

}

const FormLogin: FunctionComponent<FormLoginProps> = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
    const [userInfo, setUserInfo] = useContext(UserContext)

    const navigate = useNavigate()

    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().required().min(5)
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
            getUser(values.email, values.password)
                .then((res: any) => res.data)
                .then((data) => {
                    if (data.length > 0) {
                        alertSuccess(`Welcome ${values.email}!`)
                        navigate('/home')

                        setIsLoggedIn(true)
                        setUserInfo(data[0])
                        sessionStorage.setItem("isLoggedIn", "true")
                        sessionStorage.setItem("userInfo", JSON.stringify(data[0]))
                    }
                    else alertError("Wrong email or password!")
                })
                .catch((err) => console.log(err))
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-around align-items-center" style={{ minHeight: "16rem" }}>
                {/* Email */}
                <div className="d-flex flex-column m-2">
                    <div className="form-floating m-1">
                        <input
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            type="text"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="email">Email address</label>

                    </div>
                    {
                        formik.touched.email &&
                        formik.errors.email &&
                        <small className="text-center">{formik.errors.email}</small>
                    }
                </div>

                {/* Password */}
                <div className="d-flex flex-column m-2">
                    <div className="form-floating m-1">
                        <input
                            className="form-control"
                            id="password"
                            placeholder="name@example.com"
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        <label htmlFor="password">Password</label>

                    </div>
                    {
                        formik.touched.password &&
                        formik.errors.password &&
                        <small className="text-center">{formik.errors.password}</small>
                    }
                </div>

                {/* Submit */}
                <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn btn-outline-secondary mt-2 mb-3" style={{ width: "8rem" }}>Login</button>

                {/* Demo users */}
                <p className="mt-2 mb-0 text-center">Demo Accounts:</p>
                <div className="mb-3 text-center">
                    <button className="btn" onClick={() => {
                        getUser("lucya@gmail.com", "password1")
                            .then((res: any) => res.data)
                            .then((data) => {
                                if (data.length > 0) {
                                    alertSuccess(`Welcome lucya@gmail.com!`)
                                    navigate('/home')

                                    sessionStorage.setItem("userInfo", JSON.stringify(data[0]))
                                    sessionStorage.setItem("isLoggedIn", "true")
                                    setUserInfo(data[0])
                                    setIsLoggedIn(true)
                                }
                                else alertError("Wrong email or password!")
                            })
                            .catch((err) => console.log(err))
                    }}><small>Regular</small></button>

                    <button className="btn" onClick={() => {
                        getUser("robertd@gmail.com", "password1")
                            .then((res: any) => res.data)
                            .then((data) => {
                                if (data.length > 0) {
                                    alertSuccess(`Welcome robertd@gmail.com!`)
                                    navigate('/home')

                                    sessionStorage.setItem("userInfo", JSON.stringify(data[0]))
                                    sessionStorage.setItem("isLoggedIn", "true")
                                    setUserInfo(data[0])
                                    setIsLoggedIn(true)
                                }
                                else alertError("Wrong email or password!")
                            })
                            .catch((err) => console.log(err))
                    }}><small>Business</small></button>

                    <button className="btn" onClick={() => {
                        getUser("matanko35@gmail.com", "password1")
                            .then((res: any) => res.data)
                            .then((data) => {
                                if (data.length > 0) {
                                    alertSuccess(`Welcome matanko35@gmail.com!`)
                                    navigate('/home')

                                    sessionStorage.setItem("userInfo", JSON.stringify(data[0]))
                                    sessionStorage.setItem("isLoggedIn", "true")
                                    setUserInfo(data[0])
                                    setIsLoggedIn(true)
                                }
                                else alertError("Wrong email or password!")
                            })
                            .catch((err) => console.log(err))
                    }}><small>Admin</small></button>
                </div>
            </form>
        </>
    );
}

export default FormLogin;

