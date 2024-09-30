const { expect } = require('chai');
const findNewApartment = require('findApartment.js');

describe("findNewApartment Tests", function() {
    describe("isGoodLocation Tests", function() {
        it("should return suitable location message for valid city and transport", function() {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });

        it("should return no public transport message for valid city and false transport", function() {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        });

        it("should return not suitable message for invalid city", function() {
            expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal("This location is not suitable for you.");
        });

        it("should throw error for invalid inputs", function() {
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", "yes")).to.throw("Invalid input!");
        });
    });

    describe("isLargeEnough Tests", function() {
        it("should return an array of apartments larger than the minimum size", function() {
            const result = findNewApartment.isLargeEnough([40, 50, 60, 70], 50);
            expect(result).to.equal("50, 60, 70");
        });

        it("should throw error for invalid apartments input", function() {
            expect(() => findNewApartment.isLargeEnough("not an array", 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50], "not a number")).to.throw("Invalid input!");
        });
    });

    describe("isItAffordable Tests", function() {
        it("should return affordability message for affordable apartment", function() {
            expect(findNewApartment.isItAffordable(100, 150)).to.equal("You can afford this home!");
        });

        it("should return not affordable message for too expensive apartment", function() {
            expect(findNewApartment.isItAffordable(200, 150)).to.equal("You don't have enough money for this house!");
        });

        it("should throw error for invalid price or budget", function() {
            expect(() => findNewApartment.isItAffordable(-100, 150)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(100, -150)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable("not a number", 150)).to.throw("Invalid input!");
        });
    });
});
