import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

interface ProfileProps {

}

const Profile: FunctionComponent<ProfileProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    return (
        <>
            <div className="container mt-5">
                {/* Title */}
                <div className="text-center text-sm-start">
                    <p className="m-0">- My Profile -</p>
                    <h1 className="display-6 m-0"><b>Welcome</b></h1>
                    <h1 className="display-6"><b>To Your Profile</b></h1>
                </div>

                {/* Card */}
                <div className="mt-5">
                    <p className="mb-2 text-center text-sm-start">- Your Card -</p>
                    <div>
                        <Card userId={userInfo.id} cardType="personal" />
                    </div>
                </div>

                {/* About Link */}
                <div className="mt-5 text-center text-sm-start">
                    <p className="mb-1 ">-Information-</p>
                    <small>For info about Companix and its features press:</small>
                    <br />
                    <Link to={"/about"} className="btn btn-outline-secondary rounded-5 mt-3">
                        <i className="fa-solid fa-book me-2"></i>
                        About
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Profile;