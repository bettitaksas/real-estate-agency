import {Ad} from "./Ad";
import {District} from "./District";
import {User} from "./User";

export class RealEstateAgency {
    users: User[];
    ads: Ad[];

    constructor() {
        this.users = [];
        this.ads = [];
    }

    filterAdsByDistrict(district: District): Ad[] {
        return this.ads.filter((ad) => ad.district === district);
    }

    filterAdsByPrice(price: number): Ad[] {
        return this.ads.filter((ad) => ad.price === price);
    }

    filterAdsByFurnished(furnished: boolean): Ad[] {
        return this.ads.filter((ad) => ad.furnished === furnished);
    }

    filterAds(district?: District, price?: number, furnished?: boolean): Ad[] {
        let filteredAds = this.ads;
        if (district) {
            filteredAds = filteredAds.filter((ad) => ad.district === district);
        }
        if (price) {
            filteredAds = filteredAds.filter((ad) => ad.price === price);
        }
        if (furnished !== undefined) {
            filteredAds = filteredAds.filter((ad) => ad.furnished === furnished);
        }
        return filteredAds;
    }
}
