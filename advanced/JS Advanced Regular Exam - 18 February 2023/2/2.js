class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        }

        const wine = {
            wineName,
            wineType,
            price,
            paid: false
        };

        this.wines.push(wine);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(w => w.wineName === wineName);
        if (wineIndex === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (!this.wines[wineIndex].paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        let result = [];

        if (wineType) {
            const filteredWines = this.wines.filter(w => w.wineType === wineType);
            if (filteredWines.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
            filteredWines.forEach(w => {
                result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`);
            });
            return result.join('\n');
        } else {
            const emptySlots = this.space - this.wines.length;
            result.push(`You have space for ${emptySlots} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines
                .slice()
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach(w => {
                    result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`);
                });
            return result.join('\n');
        }
    }
}

const selection = new WineSelection(2);
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
try {
    console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
} catch (error) {
    console.error(error.message);
}

selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
