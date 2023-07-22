import { FunctionComponent, useContext, useRef, useState } from "react";
import { UserContext } from "../../App";
import { getAll } from "../../services/dbFunctions";
import User from "../../interfaces/User";
import Card from "../Card/Card";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [foundCardsId, setFoundCardsId] = useState<number[]>([])

    const nameInput = useRef<HTMLInputElement>(null)
    const idInput = useRef<HTMLInputElement>(null)

    let allUsers: User[] = []
    getAll()
        .then((res) => res.data)
        .then((data) => allUsers = data)

    const resetInputField = (ref: any) => { if (ref != null) ref.value = "" }

    const inputHandlerName = (e: any) => {
        setFoundCardsId([])
        const input = e.target.value.toLowerCase()
        if (input !== "") {
            const found: number[] = []
            allUsers.forEach(user => {
                const fullname = user.firstName.toLowerCase() + user.lastName.toLowerCase()
                if (fullname.includes(input.toLowerCase()) && user.id !== userInfo.id) {
                    found.push(user.id)
                    setFoundCardsId(found)
                    console.log(found)
                }
            });
        }
    }
    const inputHandlerId = (e: any) => {
        setFoundCardsId([])
        const input = e.target.value
        if (input !== "") {
            const found: number[] = []
            allUsers.forEach(user => {
                if (String(user.id).includes(input) && userInfo.id !== user.id) {
                    found.push(user.id)
                    setFoundCardsId(found)
                }
            });
        }
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
            <div className="row">
                {
                    foundCardsId.length ? foundCardsId.map((id) =>
                        <div key={id} className="col-6">
                            <Card userId={String(id)} cardType="gallery" />
                        </div>
                    ) : (nameInput.current?.value === "" && idInput.current?.value === "")
                        ? <p className="text-center my-5">Awaiting Input...</p>
                        : <p className="text-center my-5">No Results Found...</p>
                }
            </div>
        </>
    );
}

export default Search;