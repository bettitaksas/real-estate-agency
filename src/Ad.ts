import {District} from "./District";
import {Agent} from "./Agent";

export class Ad {
    id: number;
    address: string;
    district: District;
    agent: Agent;
    price: number;
    furnished: boolean;

    constructor(id: number, address: string, district: District, agent: Agent, price: number, furnished: boolean) {
        this.id = id;
        this.address = address;
        this.district = district;
        this.agent = agent;
        this.price = price;
        this.furnished = furnished;
    }
}
