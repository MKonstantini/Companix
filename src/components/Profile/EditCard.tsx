import { FunctionComponent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import FormEdit from "./FormEdit";

interface EditCardProps {

}

const EditCard: FunctionComponent<EditCardProps> = () => {
    return (
        <>
            <div className="container mt-5 text-center text-sm-start">
                {/* Title */}
                <div className="mt-5 mb-5 ">
                    <p className="m-0">- Edit -</p>
                    <h1 className="display-6 m-0"><b>Card</b></h1>

                </div>

                {/* Form */}
                <p className="mb-2">- Info -</p>
                <FormEdit />
            </div >
        </>
    );
}

export default EditCard;