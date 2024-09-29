const { expect } = require('chai');
const onlineStore = require('./onlineStore');

describe("Tests for onlineStore", function () {

    describe("isProductAvailable(product, stockQuantity)", function () {
        it("should return product is out of stock if stockQuantity is 0", function () {
            expect(onlineStore.isProductAvailable("Laptop", 0))
                .to.equal("Sorry, Laptop is currently out of stock.");
        });

        it("should return product is out of stock if stockQuantity is negative", function () {
            expect(onlineStore.isProductAvailable("Laptop", -1))
                .to.equal("Sorry, Laptop is currently out of stock.");
        });

        it("should return product is available for purchase if stockQuantity is positive", function () {
            expect(onlineStore.isProductAvailable("Laptop", 10))
                .to.equal("Great! Laptop is available for purchase.");
        });

        it("should throw an error if product is not a string", function () {
            expect(() => onlineStore.isProductAvailable(123, 10))
                .to.throw("Invalid input.");
        });

        it("should throw an error if stockQuantity is not a number", function () {
            expect(() => onlineStore.isProductAvailable("Laptop", "ten"))
                .to.throw("Invalid input.");
        });
    });

    describe("canAffordProduct(productPrice, accountBalance)", function () {
        it("should return insufficient funds if account balance is less than product price", function () {
            expect(onlineStore.canAffordProduct(100, 50))
                .to.equal("You don't have sufficient funds to buy this product.");
        });

        it("should return purchase successful if account balance is greater than or equal to product price", function () {
            expect(onlineStore.canAffordProduct(50, 100))
                .to.equal("Product purchased. Your remaining balance is $50.");
        });

        it("should return purchase successful with zero balance remaining", function () {
            expect(onlineStore.canAffordProduct(100, 100))
                .to.equal("Product purchased. Your remaining balance is $0.");
        });

        it("should throw an error if productPrice is not a number", function () {
            expect(() => onlineStore.canAffordProduct("100", 100))
                .to.throw("Invalid input.");
        });

        it("should throw an error if accountBalance is not a number", function () {
            expect(() => onlineStore.canAffordProduct(100, "100"))
                .to.throw("Invalid input.");
        });
    });

    describe("getRecommendedProducts(productList, category)", function () {
        it("should return recommended products for the given category", function () {
            const productList = [
                { name: "Camera", category: "Photography" },
                { name: "Laptop", category: "Electronics" },
                { name: "Lens", category: "Photography" }
            ];
            expect(onlineStore.getRecommendedProducts(productList, "Photography"))
                .to.equal("Recommended products in the Photography category: Camera, Lens");
        });

        it("should return no recommended products if none match the category", function () {
            const productList = [
                { name: "Camera", category: "Photography" },
                { name: "Laptop", category: "Electronics" }
            ];
            expect(onlineStore.getRecommendedProducts(productList, "Furniture"))
                .to.equal("Sorry, we currently have no recommended products in the Furniture category.");
        });

        it("should throw an error if productList is not an array", function () {
            expect(() => onlineStore.getRecommendedProducts("notArray", "Photography"))
                .to.throw("Invalid input.");
        });

        it("should throw an error if category is not a string", function () {
            const productList = [
                { name: "Camera", category: "Photography" }
            ];
            expect(() => onlineStore.getRecommendedProducts(productList, 123))
                .to.throw("Invalid input.");
        });
    });
});
