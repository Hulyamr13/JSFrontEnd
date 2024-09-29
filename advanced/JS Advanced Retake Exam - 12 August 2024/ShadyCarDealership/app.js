class ShadyCarDealership {
  constructor(dealerName) {
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
  }

  addCar(model, year, mileage, price) {
    if (
      typeof model !== 'string' || model.trim() === '' ||
      typeof year !== 'number' || year < 1950 ||
      typeof mileage !== 'number' || mileage < 0 ||
      typeof price !== 'number' || price < 0
    ) {
      throw new Error("Invalid car!");
    }

    this.availableCars.push({ model, year, mileage, price: Number(price.toFixed(2)) });

    return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredYear) {
    const carIndex = this.availableCars.findIndex(car => car.model === model);

    if (carIndex === -1) {
      return `${model} was not found!`;
    }

    let car = this.availableCars[carIndex];
    let soldPrice = car.price;

    if (car.year < desiredYear) {
      const yearDifference = desiredYear - car.year;
      if (yearDifference <= 5) {
        soldPrice *= 0.9;
      } else {
        soldPrice *= 0.8;
      }
    }

    this.availableCars.splice(carIndex, 1);
    this.soldCars.push({ ...car, soldPrice: Number(soldPrice.toFixed(2)) });

    this.revenue += soldPrice;

    return `${model} (${car.year}) was sold for ${soldPrice.toFixed(2)}$`;
  }

  prepareCarForSale(model) {
    const car = this.availableCars.find(car => car.model === model);

    if (!car) {
      return `${model} was not found for preparation!`;
    }

    car.mileage = Number((car.mileage / 2).toFixed(2));
    car.price = Number((car.price * 1.3).toFixed(2));

    return `${model} (${car.year}) is prepared for sale with ${car.mileage} km. - ${car.price.toFixed(2)}$`;
  }

  salesJournal(criteria) {
    if (criteria !== 'year' && criteria !== 'model') {
      throw new Error("Invalid criteria!");
    }

    this.soldCars.sort((a, b) => {
      if (criteria === 'year') {
        return b.year - a.year;
      } else {
        return a.model.localeCompare(b.model);
      }
    });

    const soldCarsCount = this.soldCars.length;
    const soldCarsOutput = this.soldCars.map(car =>
      `${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`
    ).join('\n');

    return `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$
${soldCarsCount} cars sold:
${soldCarsOutput}`;
  }
}
