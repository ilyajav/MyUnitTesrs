import {GovernmentBuildingType, HouseType} from "../02_Objects/02_02";

export function getStreetsTitlesOfGovermentsBuildings(bulidings: Array<GovernmentBuildingType>){
     return bulidings.map(t => t.address.street.title)
}

export function getStreetTitlesOfHouses(houses: Array<HouseType>){
     return houses.map(h => h.address.street.title)
}


export function createMessages(houses: Array<HouseType>){
     let callbackfn = (g: HouseType) => `Hello guys from ${g.address.street.title}`;
     return houses.map(callbackfn)
}