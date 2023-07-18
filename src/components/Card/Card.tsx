import { FunctionComponent } from "react";
import User from "../../interfaces/User";

interface CardProps {
    userInfo: User

}

const Card: FunctionComponent<CardProps> = ({ userInfo }) => {

    return (
        <>
            <div className="bg-body myBorder boxShadow p-4" style={{ maxWidth: "38rem", minHeight: "20rem" }}>
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
                                <p>Occupation: {userInfo.occupation}</p>
                            )
                        }
                    </div>
                    {/* img */}
                    <div className="col-6">
                        <img src={userInfo.imageUrl} alt="profile" style={{ width: "100%" }} className="rounded-5 myBorder" />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <i><p>Account Type: {userInfo.accountType}</p></i>
                    <i><p>Account ID: {userInfo.id}</p></i>
                </div>
            </div >
        </>
    );
}

export default Card;