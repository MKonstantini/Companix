import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import FeaturingCard from "../Card/FeaturingCard";

interface ExploreUsersProps {

}

const ExploreUsers: FunctionComponent<ExploreUsersProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    const allIds = ["101", "102", "103", "104", "105", "106", "107"]
    const displayedIds: string[] = []

    allIds.forEach(id => {
        if (userInfo.savedCards.includes(id) === false && id !== String(userInfo.id)) {
            displayedIds.push(id);
        }
    });

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

                <hr className="mt-3 mb-3" />
                {
                    displayedIds.length > 0 ?
                        <div className="row mt-3 ms-1">
                            {
                                displayedIds.map((id: string) =>
                                    <div key={id} className="col-xxl-6 d-flex flex-column align-items-xxl-start align-items-center mx-0">
                                        <FeaturingCard userId={id} />
                                    </div>
                                )
                            }
                        </div> :
                        <div className="my-5">
                            <p className="text-center">No Cards To Display!</p>
                        </div>
                }
                <hr className="mt-3 mb-3" />
            </div>
        </div>
    );
}

export default ExploreUsers;