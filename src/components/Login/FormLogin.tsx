import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { getUser, } from "../../services/dbFunctions";
import { alertError, alertSuccess } from "../../services/alertFunctions";
import { useNavigate } from "react-router-dom";

interface FormLoginProps {

}

const FormLogin: FunctionComponent<FormLoginProps> = () => {
    const navigate = useNavigate()

    let formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().required().min(5)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
            getUser(values.email, values.password)
                .then((res: any) => res.data)
                .then((data) => {
                    if (data.length > 0) {
                        alertSuccess(`Welcome ${values.email}!`)
                        navigate('/home')
                    }
                    else alertError("Wrong email or password!")
                })
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
            </form>
        </>
    );
}

export default FormLogin;


