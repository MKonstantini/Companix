import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";

interface ViewCardProps {

}

const ViewCard: FunctionComponent<ViewCardProps> = () => {
    const [userInfo] = useContext(UserContext)
    const navigate = useNavigate()

    const { id } = useParams()
    console.log(id)

    return (
        <>
            <div className="container mt-5 text-center text-sm-start">
                {/* Title */}
                <div className="mt-5 mb-5 ">
                    <p className="m-0">- View -</p>
                    <h1 className="display-6 m-0"><b>{userInfo.firstName} {userInfo.lastName}'s</b></h1>
                    <h1 className="display-6"><b>Card</b></h1>
                </div>

                {/* Profile Picture */}
                <div className="col-sm-4">
                    <p className="mb-2">- Profile Picture -</p>
                    <img src={userInfo.imageUrl} alt="profile" style={{ width: "100%" }} className="rounded-5 myBorder boxShadow" />
                </div>

                <div className="row mt-5 ">
                    <p className="mb-2">- Info -</p>
                    <hr />
                    {/* Leftside */}
                    <div className="col-sm-6">
                        <p>Name : {userInfo.firstName} {userInfo.lastName}</p>
                        <p>Email : {userInfo.email}</p>
                        <p>Phone : {userInfo.phone}</p>
                        <p>Education: {userInfo.education}</p>
                        {
                            (userInfo.company as string).length > 0 ? (
                                <p>Occupation: {userInfo.occupation} at {userInfo.company}</p>
                            ) : (
                                <p>Occupation: {userInfo.occupation}</p>
                            )
                        }
                    </div>
                    {/* Rightside */}
                    <div className="col-sm-6 text-sm-end pe-sm-0">
                        {
                            (userInfo.street as string).length > 0 && (userInfo.houseNumber as string).length > 0 ? (
                                <p>Address: {userInfo.street} {userInfo.houseNumber}, {userInfo.city}</p>
                            ) : (
                                <p>Address: {userInfo.city}</p>
                            )
                        }
                        {
                            (userInfo.state as string).length > 0 ? (
                                <p>Situated : {userInfo.state}, {userInfo.country}</p>
                            ) : (
                                <p>Situated : {userInfo.country}</p>
                            )
                        }
                        {
                            userInfo.languages && <p>Languages: {userInfo.languages}</p>
                        }
                        {
                            userInfo.zip && <p>Zip: {userInfo.zip}</p>
                        }
                    </div>
                    <hr />

                    {/* Id & Type */}
                    <div className="d-flex justify-content-between">
                        <i><p>Account Type: {userInfo.accountType}</p></i>
                        <i><p>Account ID: {userInfo.id}</p></i>
                    </div>

                    {/* Back Button */}
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <button className="btn btn-outline-secondary" style={{ width: "12rem" }} onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewCard;