export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number){
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = copy.hair / 2
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return  {
        ...u,
        address : {
            ...u.address,
            city: city
    }
}
}


export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return  {
        ...u,
        address : {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string){
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]){
    return {
        ...u,
        books: [...u.books, ...newBooks]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           currentBook: string,
                           newBook: string) =>({
          ...u,
          books: u.books.map(b => b === currentBook ? newBook : b)

})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           currentBook: string) =>({
    ...u,
    books: u.books.filter(b => b !== currentBook)
})

export const updateCompany = (user: WithCompaniesType,
                              companyId: number,
                              newTitle: string) =>{
    const copy: WithCompaniesType = {
        ...user,
        companies: user.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
    return copy
}

export const updateCompany2 = (companies: {[key: string] : Array<CompanyType>},
                               userName: string,
                               companyId: number,
                               newTitle: string
                               ) =>{

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)

    return companyCopy;

}