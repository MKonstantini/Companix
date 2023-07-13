export default interface User {
    id: string,
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
}