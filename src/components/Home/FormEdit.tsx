import { FunctionComponent, useContext } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import * as yup from "yup"
import User from "../../interfaces/User";
import { putUser } from "../../services/dbFunctions";
import { alertSuccess } from "../../services/alertFunctions";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../App";

interface FormEditProps {

}

const FormEdit: FunctionComponent<FormEditProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const navigate = useNavigate()

    let formik = useFormik({
        initialValues: {
            accountType: userInfo.accountType,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            phone: userInfo.phone,
            email: userInfo.email,
            password: userInfo.password,
            imageUrl: userInfo.imageUrl,
            country: userInfo.country,
            state: userInfo.state,
            city: userInfo.city,
            street: userInfo.street,
            houseNumber: userInfo.houseNumber,
            zip: userInfo.zip,
            occupation: userInfo.occupation,
            company: userInfo.company,
            education: userInfo.education,
            languages: userInfo.languages
        },
        validationSchema: yup.object({
            accountType: yup.string().required("account type is a required field"),
            firstName: yup.string().required("first name is a required field").min(2, "first name must be at least 2 characters"),
            lastName: yup.string().required("last name is a required field").min(2, "last name must be at least 2 characters"),
            phone: yup.string().required().min(10),
            email: yup.string().required().email(),
            password: yup.string().required().min(5),
            imageUrl: yup.string(),
            country: yup.string().required(),
            state: yup.string(),
            city: yup.string().required(),
            street: yup.string(),
            houseNumber: yup.string(),
            zip: yup.string(),
            occupation: yup.string().required(),
            company: yup.string(),
            education: yup.string(),
            languages: yup.string()
        }),
        onSubmit: (values, { resetForm }) => {
            const newUser: User = {
                id: userInfo.id,
                accountType: values.accountType,
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
                email: values.email,
                password: values.password,
                imageUrl: values.imageUrl,
                country: values.country,
                state: values.state,
                city: values.city,
                street: values.street,
                houseNumber: String(values.houseNumber),
                zip: String(values.zip),
                occupation: values.occupation,
                company: values.company,
                education: values.education,
                languages: values.languages
            };

            sessionStorage.setItem("userInfo", JSON.stringify(newUser))
            alertSuccess(`User details updated successfully!`)
            putUser(userInfo.id, newUser)
            setUserInfo(newUser)
            navigate("/home")
            resetForm()
        }
    })

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="p-1 row d-flex justify-content-center">
                <hr />
                {/* First Name */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="firstName" className="ms-2">First Name *</label>
                    <input
                        className="form-control"
                        id="firstName"
                        type="text"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName &&
                        <small className="m-0 ms-2">{formik.errors.firstName as string}</small>
                    }

                </div>
                {/* Last Name */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="lastName" className="ms-2">Last Name *</label>
                    <input
                        className="form-control"
                        id="lastName"
                        type="text"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName &&
                        <small className="m-0 ms-2">{formik.errors.lastName as string}</small>
                    }
                </div>
                {/* Phone */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="phone" className="ms-2">Phone *</label>
                    <input
                        className="form-control"
                        id="phone"
                        type="text"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone &&
                        <small className="m-0 ms-2">{formik.errors.phone as string}</small>
                    }
                </div>
                {/* Email */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="email" className="ms-2">Email *</label>
                    <input
                        className="form-control"
                        id="email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <small className="m-0 ms-2">{formik.errors.email as string}</small>
                    }
                </div>
                {/* Password */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="password" className="ms-2">Password *</label>
                    <input
                        className="form-control"
                        id="password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password &&
                        <small className="m-0 ms-2">{formik.errors.password as string}</small>
                    }
                </div>
                {/* imageUrl */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="imageUrl" className="ms-2">Profile Image (url)</label>
                    <input
                        className="form-control"
                        id="imageUrl"
                        type="text"
                        name="imageUrl"
                        onChange={formik.handleChange}
                        value={formik.values.imageUrl}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* Country */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="country" className="ms-2">Country *</label>
                    <input
                        className="form-control"
                        id="country"
                        type="text"
                        name="country"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.country && formik.errors.country &&
                        <small className="m-0 ms-2">{formik.errors.country as string}</small>
                    }
                </div>
                {/* State */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="state" className="ms-2">State</label>
                    <input
                        className="form-control"
                        id="state"
                        type="text"
                        name="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* City */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="city" className="ms-2">City *</label>
                    <input
                        className="form-control"
                        id="city"
                        type="text"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.city && formik.errors.city &&
                        <small className="m-0 ms-2">{formik.errors.city as string}</small>
                    }
                </div>
                {/* Street */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="street" className="ms-2">Street</label>
                    <input
                        className="form-control"
                        id="street"
                        type="text"
                        name="street"
                        onChange={formik.handleChange}
                        value={formik.values.street}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* House Number */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="houseNumber" className="ms-2">House Number</label>
                    <input
                        className="form-control"
                        id="houseNumber"
                        type="number"
                        name="houseNumber"
                        onChange={formik.handleChange}
                        value={formik.values.houseNumber}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* Zip */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="zip" className="ms-2">Zip</label>
                    <input
                        className="form-control"
                        id="zip"
                        type="number"
                        name="zip"
                        onChange={formik.handleChange}
                        value={formik.values.zip}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* Occupation */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="occupation" className="ms-2">Occupation *</label>
                    <input
                        className="form-control"
                        id="occupation"
                        type="text"
                        name="occupation"
                        onChange={formik.handleChange}
                        value={formik.values.occupation}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.occupation && formik.errors.occupation &&
                        <small className="m-0 ms-2">{formik.errors.occupation as string}</small>
                    }
                </div>
                {/* Company */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="company" className="ms-2">Company *</label>
                    <input
                        className="form-control"
                        id="company"
                        type="text"
                        name="company"
                        onChange={formik.handleChange}
                        value={formik.values.company}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* Education */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="education" className="ms-2">Education</label>
                    <input
                        className="form-control"
                        id="education"
                        type="text"
                        name="education"
                        onChange={formik.handleChange}
                        value={formik.values.education}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* Languages */}
                <div className="d-flex flex-column col-6 mt-2">
                    <label htmlFor="languages" className="ms-2">Languages</label>
                    <input
                        className="form-control"
                        id="languages"
                        type="text"
                        name="languages"
                        onChange={formik.handleChange}
                        value={formik.values.languages}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {/* Account Type */}
                <div className="mt-3 ms-4 mb-4">
                    <div id="accountType">Account Type</div>
                    <div className="d-flex" role="group" aria-labelledby="accountType">
                        <label className="me-3 m-sm-0">
                            <Field
                                type="radio"
                                name="accountType"
                                value="Regular"
                                className="me-2"
                            />
                            Regular
                        </label>
                        <label className="me-1 m-sm-0">
                            <Field
                                type="radio"
                                name="accountType"
                                value="Business"
                                className=" ms-3 me-2"
                            />
                            Business
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="accountType"
                                value="Admin"
                                className=" ms-3 me-2"
                            />
                            Admin
                        </label>
                    </div>
                </div>

                <hr />
                {/* Submit */}

                <div className="d-flex justify-content-center mt-4 mb-5">
                    <button type="button" className="btn btn-outline-secondary mb-3 me-4" style={{ width: "8rem" }} onClick={() => navigate(-1)}>Back</button>

                    <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn btn-outline-secondary mb-3" style={{ width: "8rem" }}>Update</button>
                </div>
            </form>
        </FormikProvider >
    );
}

export default FormEdit;
