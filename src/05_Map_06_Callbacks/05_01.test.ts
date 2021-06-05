import {greetingsGettingMessages, ManType} from "./05_01";

let people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitriy Sidorov", age: 18},
]

beforeEach(() =>{
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitriy Sidorov", age: 18},
    ]
})

test.skip('Should get array of greeting messages', ()=>{
    const messages = greetingsGettingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome to New York')
    expect(messages[1]).toBe('Hello Alexander. Welcome to New York')
    expect(messages[2]).toBe('Hello Dmitriy. Welcome to New York')
})
