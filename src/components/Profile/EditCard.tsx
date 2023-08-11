import { FunctionComponent } from "react";
import FormEdit from "./FormEdit";
import { useFetch } from "../../services/dbFunctions";
import { useParams } from "react-router-dom";

interface EditCardProps {

}

const EditCard: FunctionComponent<EditCardProps> = () => {
    const { id } = useParams()
    const userInfo = useFetch(id as string)
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
                {
                    userInfo &&
                    <FormEdit user={userInfo} />
                }
            </div >
        </>
    );
}

export default EditCard;