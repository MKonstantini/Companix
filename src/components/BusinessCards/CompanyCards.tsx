import { FunctionComponent } from "react";
import CompanyCard from "../Card/CompanyCard";

interface CompanyCardsProps {

}

const CompanyCards: FunctionComponent<CompanyCardsProps> = () => {
    return (
        <div className="container row mb-3">
            <CompanyCard cardNum={0} />

            {/* Add Card */}
            <div className="col-6">
                <div className="bg-body myBorder boxShadow p-4 ms-1 d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "38rem", minHeight: "20rem" }}>
                    <i className="fa-solid fa-circle-plus text-center mb-4" style={{ fontSize: "3rem", color: "grey" }}></i>
                    <p>Create A New Company Card!</p>
                </div>
            </div>

        </div>




    );
}

export default CompanyCards;