import { FunctionComponent, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../App";
import { getUserByParameter } from "../../services/dbFunctions";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [foundCardsId, setFoundCardsId] = useState([])

    const nameInput = useRef<HTMLInputElement>(null)
    const idInput = useRef<HTMLInputElement>(null)

    const resetInputField = (ref: any) => { if (ref != null) ref.value = "" }

    const inputHandlerName = (e: any) => {
        setFoundCardsId([])
        const input = e.target.value.toLowerCase()
    }

    const inputHandlerId = (e: any) => {
        setFoundCardsId([])
        const input = e.target.value
        getUserByParameter("id", input)
            .then((res) => res.data)
            .then((data) => {
                if (data.length > 0) {
                    setFoundCardsId(data[0].id)
                }
            })
    }

    return (
        <>
            <form className="row container text-center">
                <div className="col-6">
                    <label htmlFor="searchName" className="me-5">By Name</label>
                    <input ref={nameInput} type="text" id="searchName"
                        onClick={() => resetInputField(idInput.current)}
                        onChange={inputHandlerName} />
                </div>
                <div className="col-6">
                    <label htmlFor="searchId" className="me-5">By ID</label>
                    <input ref={idInput} type="text" id="searchId" onClick={() => resetInputField(nameInput.current)}
                        onChange={inputHandlerId} />
                </div>
                <hr className="mt-3" />
            </form>
            <div>
                {
                    foundCardsId.length > 0 && <p>SOMETHING FOUND</p>
                }
                <p className="text-center my-5">Awaiting Input...</p>

                <button className="btn btn-dark"
                    onClick={() => console.log(foundCardsId)}>Log FoundIds</button>
            </div>
        </>
    );
}

export default Search;