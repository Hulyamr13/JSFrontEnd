import { expect } from 'chai';
import foodDelivery from './food delivery.js';

describe('FoodDelivery', () => {
    it('getCategory', () => {
        expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
        expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
        expect(foodDelivery.getCategory('Gluten-Free')).to.equal('Dishes that contain no gluten.');
        expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
        expect(() => foodDelivery.getCategory('Z')).to.throw('Invalid Category!');
        expect(() => foodDelivery.getCategory(5)).to.throw('Invalid Category!');
    });

    it('addMenuItem', () => {
        expect(() => foodDelivery.addMenuItem('300', 350)).to.throw('Invalid Information!');
        expect(() => foodDelivery.addMenuItem(['300', '500'], 'fifty')).to.throw('Invalid Information!');
        expect(() => foodDelivery.addMenuItem(['300', '500'], '5')).to.throw('Invalid Information!');
        expect(() => foodDelivery.addMenuItem([], 600)).to.throw('Invalid Information!');
        expect(() => foodDelivery.addMenuItem(['300'], -1)).to.throw('Invalid Information!');
        expect(foodDelivery.addMenuItem([{ name: 'Burger', price: 10 }, { name: 'Salad', price: 7 }, { name: 'Pizza', price: 15 }], 10)).to.equal('There are 2 available menu items matching your criteria!');
        expect(foodDelivery.addMenuItem([{ name: 'Burger', price: 10 }, { name: 'Pizza', price: 15 }], 10)).to.equal('There are 1 available menu items matching your criteria!');
    });

    it('calculateOrderCost', () => {
        expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true)).to.equal('You spend $10.63 for shipping and addons with a 15% discount!');
        expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false)).to.equal('You spend $12.50 for shipping and addons!');
        expect(() => foodDelivery.calculateOrderCost('NotAnArray', [], true)).to.throw('Invalid Information!');
        expect(() => foodDelivery.calculateOrderCost([], 'NotAnArray', true)).to.throw('Invalid Information!');
        expect(() => foodDelivery.calculateOrderCost([], [], 'NotABoolean')).to.throw('Invalid Information!');
    });
});
