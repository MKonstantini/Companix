import { FunctionComponent, useContext } from "react";
import { SiteTheme, UserContext } from "../../App";
import Card from "../Card/Card";

interface ExploreUsersProps {

}

const ExploreUsers: FunctionComponent<ExploreUsersProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const theme = useContext(SiteTheme)
    return (
        <div className="container mt-5">
            {/* Title */}
            <div className="text-center text-md-start">
                <p className="m-0">- Explore Users -</p>
                <h1 className="display-6 m-0"><b>Expand Your</b></h1>
                <h1 className="display-6"><b>Network</b></h1>
            </div>

            {/* Featured Users */}
            <div className="mt-5">
                <p className="mb-2 text-center text-sm-start">- Featured Users -</p>
                <div>

                </div>
                <div>
                    <Card userId={userInfo.id} cardType="personal" />
                </div>
            </div>
        </div>
    );
}

export default ExploreUsers;