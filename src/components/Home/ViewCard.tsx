import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../services/dbFunctions";
import User from "../../interfaces/User";

interface ViewCardProps {

}

const ViewCard: FunctionComponent<ViewCardProps> = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    let userInfo: User = useFetch(id as string)

    return (
        <>
            {
                userInfo && (
                    <div className="container mt-5 text-center text-sm-start">
                        {/* Title */}
                        <div className="mt-5 mb-5 ">
                            <p className="m-0">- View -</p>
                            <h1 className="display-6 m-0"><b>Card</b></h1>
                        </div>

                        {/* Profile Picture */}
                        <div className="col-sm-4">
                            <p className="mb-2">- Profile Picture -</p>
                            <img src={userInfo.imageUrl} alt="profile" style={{ width: "100%" }} className="rounded-5 myBorder boxShadow" />
                        </div>

                        {/* Info */}
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
                                    userInfo.languages && <p>Languages: {userInfo.languages}</p>
                                }
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
                            <div className="d-flex justify-content-center mt-4 mb-5">
                                <button className="btn btn-outline-secondary" style={{ width: "8rem" }} onClick={() => navigate(-1)}>Back</button>
                            </div>
                        </div>
                    </div >
                )
            }

        </>
    );
}

export default ViewCard;

