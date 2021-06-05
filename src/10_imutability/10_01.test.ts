import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test.skip('reference type test', () => {
    let user: UserType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    user = awesomeUser

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})


test.skip('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)

})


test.skip('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'newLaptop')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.laptop.title).toBe('Zenbook')
    expect(userCopy.laptop.title).toBe('newLaptop')
    expect(user.address).toBe(userCopy.address)

})

test.skip('upgrade laptop', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
    expect(user.books).toBe(userCopy.books)
})

test.skip('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test.skip('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test.skip('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test.skip('remove company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ilya',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'Epam-IT'}]
    }

    const userCopy = updateCompany(user, 1, 'EPAM2') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM2')

})

test.skip('update company', () => {
    let companies = {
        'Ilya': [{id: 1, title: 'Epam'}, {id: 2, title: 'Epam-IT'}],
        'Artem': [{id: 2, title: 'Epam-IT'}]
    }

    const copy = updateCompany2(companies, 'Dymich', 1, 'EPAM')

    expect(copy['Ilya']).not.toBe(companies['Ilya'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Ilya'][0].title).toBe('EPAM')

})