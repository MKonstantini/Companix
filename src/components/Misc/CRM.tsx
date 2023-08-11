import { FunctionComponent, useEffect, useState } from "react";
import { useFetchAll } from "../../services/dbFunctions";
import User from "../../interfaces/User";
import { useNavigate } from "react-router-dom";

interface CRMProps {

}

const CRM: FunctionComponent<CRMProps> = () => {
    let allUsers: User[] = useFetchAll()
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
                <p className="mb-2 text-center text-sm-start">- Managing Board -</p>

                <hr className="mt-3 mb-3" />
                {
                    allUsers &&
                    <div className="row mt-3 ms-1">
                        <table className="text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>Account Type</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers.map((user: User) =>
                                        user.accountType !== "Admin" && <tr key={user.id} className="">
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td >{user.lastName}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.country}</td>
                                            <td>{user.accountType}</td>
                                            <td>
                                                <button onClick={() => navigate(`/editcard/${user.id}`)} style={{ color: "grey" }}>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => navigate(`/crm/confirmdelete/${user.id}`)} style={{ color: "grey" }}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                }
                <hr className="mt-3 mb-3" />
            </div>

        </>
    );
}

export default CRM;