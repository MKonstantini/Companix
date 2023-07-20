import { ChangeEvent, FunctionComponent, useContext, useState } from "react";
import Card from "../Card/Card";
import { UserContext } from "../../App";

interface BusinessCardsProps {

}

const BusinessCards: FunctionComponent<BusinessCardsProps> = () => {
    // React Radio Handling Functions
    const [selectedFilter, setSelectedFilter] = useState('all')
    const isFilterSelected = (value: string) => selectedFilter === value
    const handleRadioClick = (e: ChangeEvent<HTMLInputElement>) => setSelectedFilter(e.currentTarget.value)

    // Get Cards Info
    const [userInfo, setUserInfo] = useContext(UserContext)


    return (
        <>
            <div className="container mt-5">
                {/* Title */}
                <div>
                    <p className="m-0">- Business Cards -</p>
                    <h1 className="display-6 m-0"><b>Your Card</b></h1>
                    <h1 className="display-6 ms-1"><b>Collection</b></h1>
                </div>

                {/* Filters */}
                <form className="mt-5">
                    <input type="radio" className="btn-check" id="radioAll" name="radioFilter" value="all" checked={isFilterSelected('all')} onChange={handleRadioClick} />
                    <label htmlFor="radioAll" className="btn btn-outline-secondary rounded-5 me-2">
                        <i className="fa-solid fa-list me-2"></i>
                        All
                    </label>

                    <input type="radio" className="btn-check" id="radioFavorites" name="radioFilter" value="favorites" checked={isFilterSelected('favorites')} onChange={handleRadioClick} />
                    <label htmlFor="radioFavorites" className="btn btn-outline-secondary rounded-5 me-2">
                        <i className="fa-solid fa-heart me-2"></i>
                        Favorites
                    </label>

                    <input type="radio" className="btn-check" id="radioSearch" name="radioFilter" value="search" checked={isFilterSelected('search')} onChange={handleRadioClick} />
                    <label htmlFor="radioSearch" className="btn btn-outline-secondary rounded-5 me-2">
                        Search...
                    </label>
                </form>
                <hr className="mt-3 mb-3" />

                {/* Card Showcase */}
                <div className="row mt-3 ms-1">
                    {
                        userInfo.savedCards.map((id: string) =>
                            <div className="col-6">
                                <Card key={id} userId={id} cardType="gallery" />
                            </div>
                        )
                    }
                </div>

                <hr className="mt-3 mb-3" />
            </div>
        </>
    );
}

export default BusinessCards;