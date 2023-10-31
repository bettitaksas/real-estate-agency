import {District} from "../src/District";
import {Ad} from "../src/Ad";
import {RealEstateAgency} from "../src/RealEstateAgency";
import {Agent} from "../src/Agent";

describe('RealEstateAgency filterAds method', () => {
    const realEstateAgency = new RealEstateAgency();

    const agent1 = new Agent("Agent Smith", "agentsmith@example.com");

    const ad1 = new Ad(1, "123 Main St", District.V, agent1, 200000, true);
    const ad2 = new Ad(2, "456 Elm St", District.VI, agent1, 300000, false);
    const ad3 = new Ad(3, "789 Oak St", District.VII, agent1, 250000, true);

    realEstateAgency.ads.push(ad1, ad2, ad3);

    test('should filter ads based on the provided parameters', () => {
        const filteredAds = realEstateAgency.filterAds(District.V, 200000, true);
        expect(filteredAds).toEqual([ad1]);
    });
});
