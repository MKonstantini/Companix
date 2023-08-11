import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, useFetch } from "../../services/dbFunctions";
import { alertSuccess } from "../../services/alertFunctions";

interface CRMProps {

}

const CRM: FunctionComponent<CRMProps> = () => {
    const { id } = useParams()
    const userInfo = useFetch(id as string)
    const navigate = useNavigate()

    return (
        <>
            <div className="container mt-5">
                {/* Title */}
                <div className="text-center text-md-start">
                    <p className="m-0">- CRM -</p>
                    <h1 className="display-6 m-0"><b>Manage</b></h1>
                    <h1 className="display-6"><b>All Users</b></h1>
                </div>
            </div>

            <div className="container mt-5">
                <p className="mb-2 text-center text-sm-start">- Warning Message -</p>

                <hr className="mt-3 mb-3" />
                {
                    userInfo &&
                    <div className="d-flex flex-column align-items-center justify-content-center my-5">
                        <p>Are you sure you want to delete <b>{userInfo.firstName} {userInfo.lastName}</b> ?</p>
                        {
                            userInfo.imageUrl
                                ? <img src={userInfo.imageUrl} alt="" className="rounded-5 m-0 p-0 myBorder" style={{ width: "14rem" }} />
                                : <i className="fa-solid fa-circle-user rounded-5 m-0 p-0 myBorder" style={{ fontSize: "3rem" }}></i>
                        }
                        <div className="mt-4">
                            <button className="btn btn-outline-secondary mx-4 px-4" onClick={() => navigate("/crm")}> <i className="fa-solid fa-x me-1"></i> No</button>
                            <button className="btn btn-outline-secondary mx-4 px-4" onClick={() => {
                                deleteUser(userInfo.id)
                                alertSuccess(`${userInfo.firstName} ${userInfo.lastName} has been deleted successfully!`)
                                navigate("/crm")
                            }}> <i className="fa-solid fa-check me-1"></i> Yes</button>

                        </div>
                    </div>
                }
                <hr className="mt-3 mb-3" />
            </div>

        </>
    );
}

export default CRM;