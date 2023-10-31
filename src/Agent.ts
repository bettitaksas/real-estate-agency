import {User} from "./User";
import {Ad} from "./Ad";

export class Agent extends User {
    ads: Ad[];

    constructor(name: string, contact: string) {
        super(name, contact);
        this.ads = [];
    }

    postAd(ad: Ad): void {
        this.ads.push(ad);
    }
}
