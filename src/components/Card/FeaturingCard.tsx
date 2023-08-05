import { FunctionComponent, useContext } from "react";
import { SiteTheme, UserContext } from "../../App";
import { Link } from "react-router-dom";
import { patchSaved, useFetch } from "../../services/dbFunctions";

interface FeaturingCardProps {
    cardId: string
}

const FeaturingCard: FunctionComponent<FeaturingCardProps> = ({ cardId }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const userCardInfo = useFetch(cardId)
    const theme = useContext(SiteTheme)

    return (
        <>
            {
                userInfo && userCardInfo &&
                <>
                    <div className="myBorder boxShadow p-4 text-center text-md-start" style={{ maxWidth: "40rem", color: theme.color, background: theme.cardBackground }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Name : {userCardInfo.firstName} {userCardInfo.lastName}</p>
                                <p>Email : {userCardInfo.email}</p>
                                <hr className="mx-0" />
                                <p>Phone : {userCardInfo.phone}</p>
                                {
                                    (userCardInfo.state as string).length > 0 ? (
                                        <p>Situated : {userCardInfo.state}, {userCardInfo.country}</p>
                                    ) : (
                                        <p>Situated : {userCardInfo.country}</p>
                                    )
                                }
                                <p>Education: {userCardInfo.education}</p>
                                {
                                    (userCardInfo.company as string).length > 0 ? (
                                        <p>Occupation: {userCardInfo.occupation} at {userCardInfo.company}</p>
                                    ) : (
                                        <p>Occupation: {userCardInfo.occupation} (unemployed)</p>
                                    )
                                }
                            </div>
                            {/* img */}
                            <div className="col-6 mx-auto">
                                <img src={userCardInfo.imageUrl} alt="profileImg" style={{ width: "100%" }} className="rounded-5 myBorder" />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-sm-between mt-2 flex-wrap ">
                            <i><p className="m-0">Account Type: {userCardInfo.accountType}</p></i>
                            <i><p className="m-0" >Account ID: {userCardInfo.id}</p></i>
                        </div>
                    </div>
                    {/* Card Btns */}
                    <div className="mt-3 mb-3 d-flex justify-content-center justify-content-md-start">
                        <Link to={`/viewcard/${userCardInfo.id}`} className="btn btn-outline-secondary rounded-5 me-2">
                            <i className="fa-solid fa-magnifying-glass me-2"></i>
                            View
                        </Link>

                        <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                            userInfo.savedCards.push(cardId)

                            sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                            patchSaved(userInfo.id, userInfo.savedCards)

                            setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
                        }}>
                            <i className="fa-solid fa-plus me-2"></i>
                            Add Card
                        </button>
                    </div>
                </>
            }
        </>
    );
}

export default FeaturingCard;