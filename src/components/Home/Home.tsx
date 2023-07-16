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
            <div className="container vh-100 mt-5 bg-body rounded-4">
                <h1 className="text-center pt-5 display-4">Home</h1>
            </div>
        </>
    );
}

export default Home;