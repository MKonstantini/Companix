import { ChangeEvent, FunctionComponent, useContext, useState } from "react";
import CompanyCards from "../CompanyCards/CompanyCards";
import { UserContext } from "../../App";
import Card from "../Card/Card";
import Search from "./Search";

interface BusinessCardsProps {

}

const BusinessCards: FunctionComponent<BusinessCardsProps> = () => {
    // React Radio Handling Functions
    const [selectedFilter, setSelectedFilter] = useState('all')
    const isFilterSelected = (value: string) => selectedFilter === value
    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => setSelectedFilter(e.currentTarget.value)

    // Get Cards Info
    const [userInfo, setUserInfo] = useContext(UserContext)

    // Display Filter
    const displaySelectedRadio = (selectedFilter: string) => {
        switch (selectedFilter) {
            case "all":
                return (
                    userInfo.savedCards.length > 0 ?
                        <div className="row mt-3 ms-1">
                            {
                                userInfo.savedCards.map((id: string) =>
                                    <div key={id} className="col-xxl-6">
                                        <Card userId={id} cardType="gallery" />
                                    </div>
                                )
                            }
                        </div> :
                        <div className="my-5">
                            <p className="text-center">No Cards To Display!</p>
                        </div>
                )
            case "favorites":
                return (
                    userInfo.likedCards.length > 0 ?
                        <div className="row mt-3 ms-1">
                            {
                                userInfo.likedCards.map((id: string) =>
                                    <div key={id} className="col-xxl-6">
                                        <Card userId={id} cardType="gallery" />
                                    </div>
                                )
                            }
                        </div> :
                        <div className="my-5">
                            <p className="text-center">No Cards To Display!</p>
                        </div>
                )
            case "search":
                return (
                    <Search />
                )
            case "companyCards":
                return (
                    userInfo.accountType !== "Business" ?
                        <div className="my-5">
                            <p className="text-center">Sorry! This feature is for business accounts only.</p>
                        </div>
                        :
                        <CompanyCards />
                )
        }
    }

    return (
        <>
            <div className="container mt-5">
                {/* Title */}
                <div className="text-center text-md-start">
                    <p className="m-0">- Business Cards -</p>
                    <h1 className="display-6 m-0"><b>Your Card</b></h1>
                    <h1 className="display-6 ms-1"><b>Collection</b></h1>
                </div>

                {/* Filters */}
                <form className="mt-5 d-flex justify-content-center justify-content-md-between flex-wrap">
                    <div className="d-flex">
                        <input type="radio" className="btn-check" id="radioAll" name="radioFilter" value="all" checked={isFilterSelected('all')} onChange={handleRadioChange} />
                        <label htmlFor="radioAll" className="btn btn-outline-secondary rounded-5 px-3 me-2">
                            <i className="fa-solid fa-list me-2"></i>
                            All
                        </label>

                        <input type="radio" className="btn-check" id="radioFavorites" name="radioFilter" value="favorites" checked={isFilterSelected('favorites')} onChange={handleRadioChange} />
                        <label htmlFor="radioFavorites" className="btn btn-outline-secondary rounded-5 me-2">
                            <i className="fa-solid fa-heart me-2"></i>
                            Favorites
                        </label>

                        <input type="radio" className="btn-check" id="radioSearch" name="radioFilter" value="search" checked={isFilterSelected('search')} onChange={handleRadioChange} />
                        <label htmlFor="radioSearch" className="btn btn-outline-secondary rounded-5 me-2">
                            Search...
                        </label>
                    </div>

                    <div>
                        <input disabled={false} type="radio" className="btn-check" id="radioCompanyCards" name="radioFilter" value="companyCards" checked={isFilterSelected('companyCards')} onChange={handleRadioChange} />
                        <label htmlFor="radioCompanyCards" className="btn btn-outline-secondary rounded-5 me-2 mt-sm-0 mt-3">
                            Company Cards
                        </label>
                    </div>
                </form>
                <hr className="mt-3 mb-3" />

                {/* Card Showcase */}
                {displaySelectedRadio(selectedFilter)}

                <hr className="mt-2 mb-3" />
            </div>
        </>
    );
}

export default BusinessCards;