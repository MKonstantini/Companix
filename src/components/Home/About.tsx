// About Layout:
// Info about the website

import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* Back Button */}
            <div className="d-flex justify-content-center mt-4 mb-5">
                <button className="btn btn-outline-secondary" style={{ width: "8rem" }} onClick={() => navigate(-1)}>Back</button>
            </div>
        </>
    );
}

export default About;