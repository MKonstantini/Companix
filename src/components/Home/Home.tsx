// Home Layout:
// Welcome user x + Your Card + About this Website button
// Titles (main + secondary)
// Companix
// Just Good Business

// 3 Cards
// idea: toggle category business cards / company cards

import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import Card from "../Card/Card";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    return (
        <>
            <div className="container mt-5">
                {/* Title */}
                <div>
                    <p className="m-0">- Home -</p>
                    <h1 className="display-6 m-0"><b>Welcome</b></h1>
                    <h1 className="display-6 ms-1"><b>{userInfo.firstName} {userInfo.lastName}</b></h1>
                </div>
                {/* Card */}
                <div className="mt-5">
                    <p className="mb-2">-Your Card-</p>
                    <div>
                        <Card userInfo={userInfo} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;