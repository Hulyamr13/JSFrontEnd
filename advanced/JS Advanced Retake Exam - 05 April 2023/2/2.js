class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === '' || storage <= 0 || price <= 0 || condition === '') {
            throw new Error('Invalid smartphone!');
        } else {
            this.availableSmartphones.push({ model, storage, price: parseFloat(price.toFixed(2)), condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        }
    }

    sellSmartphone(model, desiredStorage) {
        let foundPhone = this.availableSmartphones.find(x => x.model === model);

        if (!foundPhone) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice;
        if (foundPhone.storage >= desiredStorage) {
            soldPrice = foundPhone.price;
        } else if (Math.abs(foundPhone.storage - desiredStorage) <= 128) {
            soldPrice = foundPhone.price * 0.9;
        } else {
            soldPrice = foundPhone.price * 0.8;
        }

        soldPrice = parseFloat(soldPrice.toFixed(2));

        this.soldSmartphones.push({
            model: foundPhone.model,
            storage: foundPhone.storage,
            soldPrice
        });
        this.availableSmartphones = this.availableSmartphones.filter(x => x.model !== model);
        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones = this.availableSmartphones.map((phone) => {
            const doubledStorage = phone.storage * 2;
            return {
                ...phone,
                storage: doubledStorage,
                price: parseFloat(phone.price.toFixed(2))
            };
        });

        const availablePhones = this.availableSmartphones
            .map(phone => `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`)
            .join("\n");

        return `Upgraded Smartphones:\n${availablePhones}`;
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria === 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);
        this.soldSmartphones.forEach(s => result.push(`${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$`));

        return result.join('\n');
    }
}

// Example Usage
let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect'));
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.upgradePhones());
console.log(retailer.salesJournal('model'));
