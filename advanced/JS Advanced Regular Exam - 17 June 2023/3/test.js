const lottery = require('./Lottery');
const { expect } = require('chai');

describe("Lottery Object Tests", function() {
    describe("buyLotteryTicket()", function() {
        it("should buy tickets and return a confirmation message", function() {
            const result = lottery.buyLotteryTicket(10, 3, true);
            expect(result).to.equal("You bought 3 tickets for 30$.");
        });

        it("should throw an error for invalid input (negative ticket price)", function() {
            expect(() => lottery.buyLotteryTicket(-5, 3, true)).to.throw("Invalid input!");
        });

        it("should throw an error for invalid input (zero ticket price)", function() {
            expect(() => lottery.buyLotteryTicket(0, 3, true)).to.throw("Invalid input!");
        });

        it("should throw an error for invalid input (ticket count less than 1)", function() {
            expect(() => lottery.buyLotteryTicket(10, 0, true)).to.throw("Invalid input!");
        });

        it("should throw an error for invalid input (ticketCount is not a number)", function() {
            expect(() => lottery.buyLotteryTicket(10, 'three', true)).to.throw("Invalid input!");
        });

        it("should throw an error for invalid input (ticketPrice is not a number)", function() {
            expect(() => lottery.buyLotteryTicket('ten', 3, true)).to.throw("Invalid input!");
        });

        it("should throw an error when buy is false", function() {
            expect(() => lottery.buyLotteryTicket(10, 3, false)).to.throw("Unable to buy lottery ticket!");
        });
    });

    describe("checkTicket()", function() {
        it("should return a win message for matching ticket numbers", function() {
            const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9]);
            expect(result).to.equal("Congratulations you win, check your reward!");
        });

        it("should return the jackpot message for all matching numbers", function() {
            const result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
            expect(result).to.equal("You win the JACKPOT!!!");
        });

        it("should throw an error for invalid input (not arrays)", function() {
            expect(() => lottery.checkTicket("not an array", [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], "not an array")).to.throw("Invalid input!");
        });

        it("should throw an error for arrays that do not have 6 numbers", function() {
            expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2])).to.throw("Invalid input!");
        });
    });

    describe("secondChance()", function() {
        it("should return a win message for matching ticket ID", function() {
            const result = lottery.secondChance(123, [100, 200, 123]);
            expect(result).to.equal("You win our second chance prize!");
        });

        it("should return a loss message for non-matching ticket ID", function() {
            const result = lottery.secondChance(456, [100, 200, 123]);
            expect(result).to.equal("Sorry, your ticket didn't win!");
        });

        it("should throw an error for invalid input (ticketID not a number)", function() {
            expect(() => lottery.secondChance("not a number", [100, 200, 123])).to.throw("Invalid input!");
        });

        it("should throw an error for invalid input (secondChanceWinningIDs not an array)", function() {
            expect(() => lottery.secondChance(123, "not an array")).to.throw("Invalid input!");
        });
    });
});
