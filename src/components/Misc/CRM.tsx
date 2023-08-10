import { FunctionComponent } from "react";
import { useFetchAll } from "../../services/dbFunctions";
import User from "../../interfaces/User";

interface CRMProps {

}

const CRM: FunctionComponent<CRMProps> = () => {
    const allUsers: User[] = useFetchAll()
    console.log(allUsers)

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
                        <ul>
                            {
                                allUsers.map((user: User) =>
                                    <li key={user.id} className="">
                                        {user.firstName}
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                }
                <hr className="mt-3 mb-3" />
            </div>

        </>
    );
}

export default CRM;