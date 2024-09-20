const assert = require('chai').assert;
const petAdoptionAgency = require('../../test/petAdoptionAgency');

describe("Tests for petAdoptionAgency", function() {

    describe("isPetAvailable", function() {

        it("should return a message when there are no pets available", function() {
            const result = petAdoptionAgency.isPetAvailable("Dog", 0, true);
            assert.equal(result, "Sorry, there are no Dog(s) available for adoption at the agency.");
        });

        it("should return a message when pets are available and vaccinated", function() {
            const result = petAdoptionAgency.isPetAvailable("Cat", 3, true);
            assert.equal(result, "Great! We have 3 vaccinated Cat(s) available for adoption at the agency.");
        });

        it("should return a message when pets are available but not vaccinated", function() {
            const result = petAdoptionAgency.isPetAvailable("Rabbit", 2, false);
            assert.equal(result, "Great! We have 2 Rabbit(s) available for adoption, but they need vaccination.");
        });

        it("should throw an error 'Invalid input' for non-string pet parameter", function() {
            assert.throws(() => petAdoptionAgency.isPetAvailable(123, 5, true), "Invalid input");
        });

        it("should throw an error 'Invalid input' for non-number availableCount parameter", function() {
            assert.throws(() => petAdoptionAgency.isPetAvailable("Cat", "five", true), "Invalid input");
        });

        it("should throw an error 'Invalid input' for non-boolean vaccinated parameter", function() {
            assert.throws(() => petAdoptionAgency.isPetAvailable("Cat", 5, "yes"), "Invalid input");
        });
    });

    describe("getRecommendedPets", function() {
        const petList = [
            { name: "Fluffy", traits: "Playful" },
            { name: "Whiskers", traits: "Cuddly" },
            { name: "Fido", traits: "Playful" },
        ];

        it("should return a list of recommended pets with the desired traits", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Playful");
            assert.equal(result, "Recommended pets with the desired traits (Playful): Fluffy, Fido");
        });

        it("should return 'Sorry, we currently have no recommended pets with the desired traits: Sleepy.' when no recommended pets are found", function() {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Sleepy");
            assert.equal(result, "Sorry, we currently have no recommended pets with the desired traits: Sleepy.");
        });

        it("should throw an error 'Invalid input' for invalid input parameters (non-array petList)", function() {
            assert.throws(() => petAdoptionAgency.getRecommendedPets("invalid", "Playful"), "Invalid input");
        });

        it("should throw an error 'Invalid input' for invalid input parameters (non-string desiredTraits)", function() {
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: "Fluffy", traits: "Playful" }], 100), "Invalid input");
        });
    });

    describe("adoptPet", function() {

        it("should return a success message when adopting a pet", function() {
            const result = petAdoptionAgency.adoptPet("Whiskers", "Alice");
            assert.equal(result, "Congratulations, Alice! You have adopted Whiskers from the agency. Enjoy your time with your new furry friend!");
        });

        it("should throw an error 'Invalid input' for non-string pet parameter", function() {
            assert.throws(() => petAdoptionAgency.adoptPet(100, "Alice"), "Invalid input");
        });

        it("should throw an error 'Invalid input' for non-string adopterName parameter", function() {
            assert.throws(() => petAdoptionAgency.adoptPet("Fluffy", 100), "Invalid input");
        });
    });

});
