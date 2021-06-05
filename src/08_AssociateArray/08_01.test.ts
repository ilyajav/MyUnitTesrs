import {UsersType} from "./08_01";

let users: UsersType

beforeEach(() =>{
    users = {
        '101': {id: 101, name: 'Ilya'},
        '3232312': {id: 3232312, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test.skip('Should delete select corresponding user', () => {
    users['1'].name = 'Ekaterina'
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})