import { FunctionComponent, useRef } from "react";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    const nameInput = useRef<HTMLInputElement>(null)
    const idInput = useRef<HTMLInputElement>(null)

    const resetInputField = (field: HTMLInputElement) => { if (field != null) field.value = "" }

    return (
        <>
            <form className="row container text-center">
                <div className="col-6">
                    <label htmlFor="searchName" className="me-5">By Name</label>
                    <input ref={nameInput} type="text" id="searchName" />
                </div>
                <div className="col-6">
                    <label htmlFor="searchId" className="me-5">By ID</label>
                    <input ref={idInput} type="text" id="searchId" onClick={resetInputField(nameInput.current as HTMLInputElement)} />
                </div>
                <hr className="mt-3" />
            </form>
            <div>
                <p className="text-center my-5">Awaiting Input...</p>
            </div>
        </>
    );
}

export default Search;