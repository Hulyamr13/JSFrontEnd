const expect = require('chai').expect;
const weddingDay = require('./weddingDay');

describe("weddingDay Object Tests", function() {
    describe("pickVenue", function() {
        it("should throw an error for invalid input types", function() {
            expect(() => { weddingDay.pickVenue(50, '100', 'Varna') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue('50', 100, 'Varna') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue(50, 100, '') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue(50, 100, []) }).to.throw('Invalid Information!');
        });

        it("should throw an error if location is not Varna", function() {
            expect(() => { weddingDay.pickVenue(50, 100, 'Sofia') }).to.throw('The location of this venue is not in the correct area!');
        });

        it("should return a success message if venue meets requirements", function() {
            expect(weddingDay.pickVenue(200, 100, 'Varna')).to.equal('This venue meets the requirements, with capacity of 200 guests and 100$ cover.');
        });

        it("should return a failure message if venue does not meet requirements", function() {
            expect(weddingDay.pickVenue(50, 100, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(160, 180, 'Varna')).to.equal('This venue does not meet your requirements!');
        });
    });

    describe("otherSpendings", function() {
        it("should throw an error for invalid input types", function() {
            expect(() => { weddingDay.otherSpendings(['flowers'], 'pictures', true) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.otherSpendings('flowers', ['pictures'], true) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.otherSpendings(['flowers'], ['pictures'], 'true') }).to.throw('Invalid Information!');
        });

        it("should return the correct total for wedding decoration and photography", function() {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], [], true)).to.equal('You spend 765$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], [], false)).to.equal('You spend 900$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers'], ['video'], true)).to.equal('You spend 1530$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings([], ['video', 'pictures'], true)).to.equal('You spend 1700$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings([], ['video', 'pictures'], false)).to.equal('You spend 2000$ for wedding decoration and photography!');
        });
    });

    describe("tableDistribution", function() {
        it("should throw an error for invalid input types", function() {
            expect(() => { weddingDay.tableDistribution('5', '5') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.tableDistribution(5, '5') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.tableDistribution(0, 5) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.tableDistribution(5, -1) }).to.throw('Invalid Information!');
        });

        it("should return the correct distribution of guests on tables", function() {
            expect(weddingDay.tableDistribution(50, 5)).to.equal('You have 5 tables with 10 guests on table.');
            expect(weddingDay.tableDistribution(100, 20)).to.equal('There is only 5 people on every table, you can join some tables.');
        });
    });
});
