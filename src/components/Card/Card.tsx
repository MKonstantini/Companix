import { FunctionComponent, useContext } from "react";
import { useFetch } from "../../services/dbFunctions";
import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import RemoveBtn from "./RemoveBtn";
import { SiteTheme } from "../../App";

interface CardProps {
    userId: string
    cardType: string
}

const Card: FunctionComponent<CardProps> = ({ userId, cardType }) => {
    const theme = useContext(SiteTheme)
    const userInfo = useFetch(userId)

    return (
        <>
            {
                userInfo &&
                <>
                    <div className="myBorder boxShadow p-4 text-center text-md-start" style={{ maxWidth: "40rem", color: theme.color, background: theme.cardBackground }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Name : {userInfo.firstName} {userInfo.lastName}</p>
                                <p>Email : {userInfo.email}</p>
                                <hr className="mx-0" />
                                <p>Phone : {userInfo.phone}</p>
                                {
                                    (userInfo.state as string).length > 0 ? (
                                        <p>Situated : {userInfo.state}, {userInfo.country}</p>
                                    ) : (
                                        <p>Situated : {userInfo.country}</p>
                                    )
                                }
                                <p>Education: {userInfo.education}</p>
                                {
                                    (userInfo.company as string).length > 0 ? (
                                        <p>Occupation: {userInfo.occupation} at {userInfo.company}</p>
                                    ) : (
                                        <p>Occupation: {userInfo.occupation} (unemployed)</p>
                                    )
                                }
                            </div>
                            {/* img */}
                            <div className="col-6 mx-auto">
                                {
                                    userInfo.imageUrl ?
                                        <img src={userInfo.imageUrl} alt="profileImg" style={{ width: "100%" }} className="rounded-5 myBorder" />
                                        : <div className="d-flex h-100 justify-content-center align-items-center">
                                            <i className="fa-solid fa-circle-user rounded-5 m-0 p-0" style={{ fontSize: "11rem" }}></i>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-sm-between mt-2 flex-wrap ">
                            <i><p className="m-0">Account Type: {userInfo.accountType}</p></i>
                            <i><p className="m-0" >Account ID: {userInfo.id}</p></i>
                        </div>
                    </div>

                    {/* Card Btns */}
                    {
                        cardType === "gallery" ? (
                            <div className="mt-3 mb-3 d-flex justify-content-center justify-content-md-start">
                                <Link to={`/viewcard/${userInfo.id}`} className="btn btn-outline-secondary rounded-5 me-2">
                                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                                    View
                                </Link>

                                <LikeBtn cardId={userId} />

                                <RemoveBtn cardId={userId} />
                            </div>
                        ) : (
                            < div className="mt-3 d-flex justify-content-center justify-content-md-start">
                                <Link to={`/viewcard/${userInfo.id}`} className="btn btn-outline-secondary rounded-5 me-2">
                                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                                    View
                                </Link>
                                <Link to={`/editcard/${userInfo.id}`} className="btn btn-outline-secondary rounded-5">
                                    <i className="fa-solid fa-user-pen me-2"></i>
                                    Edit
                                </Link>
                            </div>
                        )
                    }
                </>
            }
        </>
    );
}

export default Card;