class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this._decreaseQuality();
    }

    turnOff() {
        this.isOn = false;
        this._decreaseQuality();
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    _decreaseQuality() {
        this.quality -= 1;
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
}

// Example 1
let info1 = { producer: "Dell", age: 2, brand: "XPS" };
let laptop1 = new Laptop(info1, 10);

laptop1.turnOn();
console.log(laptop1.showInfo()); // {"producer":"Dell","age":2,"brand":"XPS"}
laptop1.turnOff();
console.log(laptop1.quality);    // 8
laptop1.turnOn();
console.log(laptop1.isOn);       // true
console.log(laptop1.price);      // 799.5

// Example 2
let info2 = { producer: "Lenovo", age: 1, brand: "Legion" };
let laptop2 = new Laptop(info2, 10);

laptop2.turnOn();
console.log(laptop2.showInfo()); // {"producer":"Lenovo","age":1,"brand":"Legion"}
laptop2.turnOff();
laptop2.turnOn();
laptop2.turnOff();
console.log(laptop2.isOn);       // false
