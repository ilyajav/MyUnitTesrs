import {CityType} from "../02_Objects/02_02";
import {createMessages, getStreetsTitlesOfGovermentsBuildings, getStreetTitlesOfHouses} from "./05_02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings : [
            {
                type: 'HOSPITAL',
                address: {street: {title: 'Central Str'}, number: 12},
                budget: 200000, staffCount: 200
            },
            {
                type: 'FIRE-STATION',
                address: {street: {title: 'South Str'}, number: 12},
                budget: 500000, staffCount: 1000
            }
        ],
        citizensNumber: 1000000
    }
})

test.skip('List of streets titles of government buildings', ()=>{
    let streets = getStreetsTitlesOfGovermentsBuildings(
        city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe('Central Str');
    expect(streets[1]).toBe('South Str');
})

test.skip('List of streets titles', ()=>{
    let streets = getStreetTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe(/**/'White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})

test.skip('create greetings messages for streets', ()=>{
   let messages = createMessages(city.houses);

   expect(messages.length).toBe(3);
   expect(messages[0]).toBe('Hello guys from White street')
   expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})