export type ManType = {
   name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitriy Sidorov", age: 18},
]

const transformator = (man:ManType) =>({
            stack: ['css, html', 'js', 'tdd', 'react'],
            firsName: man.name.split(" ")[0],
            lastName: man.name.split(" ")[1]
})

const devs1 = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitriy', lastName: 'Sidorov'
    }
]


const devs2 = [
    transformator( people[0]),
    transformator( people[1]),
    transformator( people[2])
]

const devs3 = people.map(transformator)
const devs4 = people.map(man =>({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firsName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people
    .map( man => `Hello ${man.name.split(' ')[0]}.
     Welcome to New York`)

export const greetingsGettingMessages = (people: Array<ManType>) =>{
    return people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to New York`)
}
