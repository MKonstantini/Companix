import { FunctionComponent, useContext } from "react";
import CompanyCard from "../Card/CompanyCard";
import { UserContext } from "../../App";
import CCard from "../../interfaces/CCard";

interface CompanyCardsProps {

}

const CompanyCards: FunctionComponent<CompanyCardsProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    return (
        <div className="container row mb-3">
            {/* Display Cards */}
            {
                userInfo.companyCards.map((card: CCard) => {
                    return (
                        <CompanyCard cardNum={card.id} key={card.id} />
                    )
                })
            }

            {/* Add Card */}
            <div className="col-6">
                <div className="bg-body myBorder boxShadow p-4 ms-1 d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: "38rem", minHeight: "20rem" }}>
                    <i className="fa-solid fa-circle-plus text-center mb-4" style={{ fontSize: "3rem", color: "#6C757D" }}></i>
                    <p>Create A New Company Card!</p>
                </div>
            </div>

        </div>




    );
}

export default CompanyCards;