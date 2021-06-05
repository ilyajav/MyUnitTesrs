function increaseAge(u: UserType){
    u.age++;
}

type UserType = {
    name: string,
    age: number,
    address: {title: string}
}

test.skip('reference type test', () =>{

    let user: UserType = {
        name: 'Ilya',
        age: 32,
        address:{
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})


test.skip('array reference test', () =>{

    let users = [
        {name: 'Ilya', age: 32},
        {name: 'Ilya', age: 32 }
    ]

    const admins = users
    admins.push({name: 'Band', age: 10 })

    expect(users[2]).toEqual({name: 'Band', age: 10 })

})


test.skip('reference type test', () =>{

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Ilya',
        age: 32,
        address: address
    }

    //let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')
})



test.skip('reference type array test', () =>{

    const address = {
        title: 'Minsk City'
    }

    let user: UserType = {
        name: 'Ilya',
        age: 32,
        address: address
    }

    //let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]
    admins[0].name = 'D'

    expect(users[0].name).toBe('D')
    expect(user.address.title).toBe('Minsk City')
})

test.skip('sort array test', ()=>{

    const letters = ['c', 'd', 'a', 'z', 'e']
    passportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})

function passportist(letters: any){
   const copy = [...letters].sort();
   console.log(letters)
}