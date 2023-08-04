import { FunctionComponent, useContext } from "react";
import { useFetch } from "../../services/dbFunctions";
import { SiteTheme } from "../../App";
import { Link } from "react-router-dom";

interface FeaturingCardProps {
    userId: string
}

const FeaturingCard: FunctionComponent<FeaturingCardProps> = ({ userId }) => {
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
                                <img src={userInfo.imageUrl} alt="profileImg" style={{ width: "100%" }} className="rounded-5 myBorder" />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-sm-between mt-2 flex-wrap ">
                            <i><p className="m-0">Account Type: {userInfo.accountType}</p></i>
                            <i><p className="m-0" >Account ID: {userInfo.id}</p></i>
                        </div>
                    </div>
                    {/* Card Btns */}
                    <div className="mt-3 mb-3 d-flex justify-content-center justify-content-md-start">
                        <Link to={`/viewcard/${userInfo.id}`} className="btn btn-outline-secondary rounded-5 me-2">
                            <i className="fa-solid fa-magnifying-glass me-2"></i>
                            View
                        </Link>

                        <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {

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