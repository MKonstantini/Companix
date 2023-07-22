import { FunctionComponent } from "react";
import { useFetch } from "../../services/dbFunctions";
import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import RemoveBtn from "./RemoveBtn";

interface CardProps {
    userId: string
    cardType: string
}

const Card: FunctionComponent<CardProps> = ({ userId, cardType }) => {

    const userInfo = useFetch(userId)

    return (
        <>
            {
                userInfo &&
                <>
                    <div className="bg-body myBorder boxShadow p-4" style={{ maxWidth: "38rem", height: "21.5rem" }}>
                        <div className="row">
                            <div className="col-6">
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
                            <div className="col-6">
                                <img src={userInfo.imageUrl} alt="profile" style={{ width: "100%" }} className="rounded-5 myBorder" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <i><p className="m-0">Account Type: {userInfo.accountType}</p></i>
                            <i><p className="m-0" >Account ID: {userInfo.id}</p></i>
                        </div>

                    </div>

                    {/* Card Btns */}
                    {
                        cardType === "gallery" ? (
                            <div className="mt-3 mb-3">
                                <Link to={`/viewcard/${userInfo.id}`} className="btn btn-outline-secondary rounded-5 me-2">
                                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                                    View
                                </Link>

                                <LikeBtn cardId={userId} />

                                <RemoveBtn cardId={userId} />
                            </div>
                        ) : (
                            < div className="mt-3">
                                <Link to={`/viewcard/${userInfo.id}`} className="btn btn-outline-secondary rounded-5 me-2">
                                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                                    View
                                </Link>
                                <Link to={"/editcard/user"} className="btn btn-outline-secondary rounded-5">
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