const { expect } = require('chai');
const recipeSelection = require('./recipeSelection');

describe("Tests for recipeSelection object", function () {

    describe("Tests for isTypeSuitable function", function () {
        it("should return 'This recipe is not suitable for vegetarians' when type is 'Meat' and dietaryRestriction is 'Vegetarian'", function () {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal("This recipe is not suitable for vegetarians");
        });

        it("should return 'This recipe is not suitable for vegans' when type is 'Meat' and dietaryRestriction is 'Vegan'", function () {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        });

        it("should return 'This recipe is not suitable for vegans' when type is 'Dairy' and dietaryRestriction is 'Vegan'", function () {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal("This recipe is not suitable for vegans");
        });

        it("should return 'This recipe is suitable for your dietary restriction' for other combinations", function () {
            expect(recipeSelection.isTypeSuitable('Vegetable', 'Vegan')).to.equal("This recipe is suitable for your dietary restriction");
        });

        it("should throw an error for invalid inputs (non-strings)", function () {
            expect(() => recipeSelection.isTypeSuitable(123, 'Vegan')).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable('Meat', null)).to.throw("Invalid input");
        });
    });

    describe("Tests for isItAffordable function", function () {
        it("should return 'Recipe ingredients bought. You have {remainingBudget}$ left' if budget is enough", function () {
            expect(recipeSelection.isItAffordable(20, 50)).to.equal("Recipe ingredients bought. You have 30$ left");
        });

        it("should return 'You don't have enough budget to afford this recipe' if budget is not enough", function () {
            expect(recipeSelection.isItAffordable(70, 50)).to.equal("You don't have enough budget to afford this recipe");
        });

        it("should throw an error for invalid inputs (non-numbers)", function () {
            expect(() => recipeSelection.isItAffordable("20", 50)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(20, "50")).to.throw("Invalid input");
        });
    });

    describe("Tests for getRecipesByCategory function", function () {
        const recipes = [
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Mushroom Risotto", category: "Italian" },
            { title: "Green Salad", category: "Salad" },
            { title: "Pasta Bolognese", category: "Italian" }
        ];

        it("should return array of recipe titles that match the category", function () {
            expect(recipeSelection.getRecipesByCategory(recipes, "Italian")).to.deep.equal(["Mushroom Risotto", "Pasta Bolognese"]);
        });

        it("should return an empty array if no recipes match the category", function () {
            expect(recipeSelection.getRecipesByCategory(recipes, "Mexican")).to.deep.equal([]);
        });

        it("should throw an error for invalid inputs (non-array recipes or non-string category)", function () {
            expect(() => recipeSelection.getRecipesByCategory("not an array", "Italian")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory(recipes, 123)).to.throw("Invalid input");
        });
    });
});
