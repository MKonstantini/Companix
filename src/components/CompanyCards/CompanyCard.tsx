import { FunctionComponent, useContext, useState } from "react";
import { UserContext } from "../../App";
import { useFormik } from "formik";
import * as yup from "yup";
import { patchCompanyCard } from "../../services/dbFunctions";
import CCard from "../../interfaces/CCard";

interface CompanyCardProps {
    cardNum: number

}

const CompanyCard: FunctionComponent<CompanyCardProps> = ({ cardNum }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)

    let formik = useFormik({
        initialValues: {
            id: userInfo.companyCards[cardNum].id,
            name: userInfo.companyCards[cardNum].name,
            email: userInfo.companyCards[cardNum].email,
            location: userInfo.companyCards[cardNum].location,
            phone: userInfo.companyCards[cardNum].phone
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            location: yup.string().required(),
            phone: yup.string().required()
        }),
        onSubmit: (values: CCard) => {
            // split to two types - edit and new
            setIsEditing(false)
            const cardsData = userInfo.companyCards
            cardsData.splice(cardNum, 1, values)
            patchCompanyCard(userInfo.id, cardsData)
        }
    })

    return (
        <div className="col-6">
            {/* Card */}
            <div className="bg-body myBorder boxShadow p-4 ms-1 d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "38rem", minHeight: "20rem" }}>
                {
                    isEditing ? (
                        <form className="text-end" onSubmit={formik.handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="name" className="me-3">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {
                                    formik.touched.name && formik.errors.name &&
                                    <p className="text-center m-0">{formik.errors.name as string}</p>
                                }
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="me-3">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {
                                    formik.touched.email && formik.errors.email &&
                                    <p className="text-center m-0">{formik.errors.email as string}</p>
                                }
                            </div>
                            <div className="mb-2">
                                <label htmlFor="location" className="me-3">Location:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {
                                    formik.touched.location && formik.errors.location &&
                                    <p className="text-center m-0">{formik.errors.location as string}</p>
                                }
                            </div>
                            <div className="mb-2">
                                <label htmlFor="phone" className="me-3">Phone:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {
                                    formik.touched.phone && formik.errors.phone &&
                                    <p className="text-center m-0">{formik.errors.phone as string}</p>
                                }
                            </div>

                            {/* Form Btns */}
                            <hr className="my-3" />
                            <div className="d-flex justify-content-center">
                                {/* Cancel Btn */}
                                <button type="button" className="me-3 btn btn-outline-secondary"
                                    onClick={() => {
                                        setIsEditing(false);
                                        formik.resetForm()
                                    }}>Cancel</button>
                                {/* Update Btn */}
                                <button type="submit" className="btn btn-outline-secondary" disabled={!formik.isValid && formik.dirty}>Update</button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center">
                            {/* Display Card */}
                            <h1 style={{ fontWeight: "bold" }} className="display-6">{userInfo.companyCards[cardNum].name}</h1>
                            <hr className="my-3" />
                            <p>{userInfo.companyCards[cardNum].email}</p>
                            <p>{userInfo.companyCards[cardNum].location}</p>
                            <p>{userInfo.companyCards[cardNum].phone}</p>
                        </div>
                    )
                }
            </div>

            {/* Card Buttons */}
            <div className="mt-3 mb-3">
                {/* Edit */}
                <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => { setIsEditing(!isEditing) }}>
                    <i className="me-2 fa-solid fa-pen-to-square"></i>
                    Edit
                </button>
                {/* Remove */}
                <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                    const cardsData = userInfo.companyCards
                    cardsData.splice(cardNum, 1)
                    patchCompanyCard(userInfo.id, cardsData)
                }}>
                    <i className="fa-solid fa-x me-2"></i>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CompanyCard;