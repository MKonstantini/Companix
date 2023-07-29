import CCard from "./CCard"

export default interface User {
    id: number,
    accountType: string,
    firstName : string,
    lastName : string,
    phone : string,
    email : string,
    password : string,
    imageUrl ?: string,
    country : string,
    state ?: string,
    city : string,
    street ?: string,
    houseNumber ?: string,
    zip ?: string
    occupation: string,
    company?: string,
    education?: string,
    languages?: string,
    savedCards: string[],
    likedCards: string[],
    companyCards: CCard[]
}