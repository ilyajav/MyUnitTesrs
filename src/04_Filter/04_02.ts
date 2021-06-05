import {CityType, GovernmentBuildingType} from "../02_Objects/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string){
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGretterThen(buldings: Array<GovernmentBuildingType>, number: number){
   return buldings.filter(b => b.staffCount > 500)
}