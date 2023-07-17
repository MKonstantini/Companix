// Home Layout:
// Welcome user x + Your Card + About this Website button
// Titles (main + secondary)
// Companix
// Just Good Business

// 3 Cards
// idea: toggle category business cards / company cards

import { FunctionComponent } from "react";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <div className="container mt-5">
                {/* Title */}
                <div>
                    <p className="m-0">- Home -</p>
                    <h1 className="display-6 m-0"><b>Welcome</b></h1>
                    <h1 className="display-6 ms-1"><b>Lucy Anderson</b></h1>
                </div>
                {/* Card */}
                <div className="mt-5">
                    <p className="m-0">-Your Card-</p>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;