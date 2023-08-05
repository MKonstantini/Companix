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
            <div className="container mt-5 text-center text-md-start">
                {/* Title */}
                <div>
                    <p className="m-0">- About -</p>
                    <h1 className="display-6 m-0"><b>About Companix</b></h1>
                </div>

                {/* About Paragraph 1 */}
                <div className="my-5 col-12 col-md-6">
                    <p>Companix is a card-based networking webiste for your social and professional needs.</p><br />
                    <p>Featuring:</p>
                    <p>1.) Business Cards Section : Displays business cards, collected from other users. view, like and remove cards from your collection. Use the favorites and search tab to display specific cards.</p>
                    <p>2.) Company Cards : For business accounts only. Create a card for your company. Edit and remove company cards as you see fit. Unlike your user card, company cards are unlimited in amount.</p>
                    <p>3.) Profile Section : A profile section to view and change your information.</p>
                </div>

                {/* About Paragraph 2 */}
                <div className="my-5 col-12 col-md-6">
                    <p>Development:</p>
                    <p>Companix was created using React. Coded and compiled using HTML, CSS and TypeScript by Matan Konstantini. Created as a course project while studying fullstack developement at HackerU.</p>
                </div>
            </div>

            {/* Back Button */}
            <div className="d-flex justify-content-center mt-4 mb-5">
                <button className="btn btn-outline-secondary" style={{ width: "8rem" }} onClick={() => navigate(-1)}>Back</button>
            </div>
        </>
    );
}

export default About;