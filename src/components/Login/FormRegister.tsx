import { FunctionComponent } from "react";
import { Field, FormikProvider, useFormik } from "formik";
import * as yup from "yup"
import User from "../../interfaces/User";
import { addUser } from "../../services/dbFunctions";

interface FormRegisterProps {

}

const FormRegister: FunctionComponent<FormRegisterProps> = () => {
    let formik = useFormik({
        initialValues: {
            accountType: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            imageUrl: "",
            country: "",
            state: "",
            city: "",
            street: "",
            houseNumber: "",
            zip: ""
        },
        validationSchema: yup.object({
            accountType: yup.string().required(),
            firstName: yup.string().required().min(2),
            lastName: yup.string().required().min(2),
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
        }),
        onSubmit: (values, { resetForm }) => {
            const newUser: User = {
                id: (Math.floor(Math.random() * 999 - 100) + 100).toString(),
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
                houseNumber: values.houseNumber.toString(),
                zip: values.zip.toString()
            };

            addUser(newUser)
            resetForm()
        }
    })

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="p-1 row d-flex justify-content-center">
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
                {/* Account Type */}
                <div className="mt-3 ms-4 mb-0">
                    <div id="accountType">Account Type</div>
                    <div className="d-flex" role="group" aria-labelledby="accountType">
                        <label>
                            <Field
                                type="radio"
                                name="accountType"
                                value="Regular"
                                className="me-2"
                            />
                            Regular
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="accountType"
                                value="Business"
                                className=" ms-3 me-2"
                            />
                            Business
                        </label>
                    </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn btn-outline-secondary mt-4 mb-3" style={{ width: "8rem" }}>Register</button>
            </form>
        </FormikProvider>
    );
}

export default FormRegister;
