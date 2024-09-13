class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }

  addBikes(bikes) {
    const addedBrands = new Set();

    bikes.forEach(bike => {
      let [brand, quantity, price] = bike.split("-");
      quantity = Number(quantity);
      price = Number(price);

      const existingBike = this.availableBikes.find(b => b.brand === brand);

      if (existingBike) {
        existingBike.quantity += quantity;
        if (price > existingBike.price) {
          existingBike.price = price;
        }
      } else {
        this.availableBikes.push({ brand, quantity, price });
        addedBrands.add(brand);
      }
    });

    return `Successfully added ${[...addedBrands].join(", ")}`;
  }

  rentBikes(selectedBikes) {
    let totalPrice = 0;
    let insufficientStock = false;

    selectedBikes.forEach(bike => {
      const [brand, quantity] = bike.split("-");
      const bikeQuantity = Number(quantity);

      const existingBike = this.availableBikes.find(b => b.brand === brand);

      if (!existingBike || existingBike.quantity < bikeQuantity) {
        insufficientStock = true;
      } else {
        totalPrice += existingBike.price * bikeQuantity;
        existingBike.quantity -= bikeQuantity;
      }
    });

    if (insufficientStock) {
      return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
    }
    return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  returnBikes(returnedBikes) {
    let allValid = true;

    returnedBikes.forEach(bike => {
      const [brand, quantity] = bike.split("-");
      const bikeQuantity = Number(quantity);

      const existingBike = this.availableBikes.find(b => b.brand === brand);

      if (!existingBike) {
        allValid = false;
      } else {
        existingBike.quantity += bikeQuantity;
      }
    });

    return allValid ? "Thank you for returning!" : "Some of the returned bikes are not from our selection.";
  }

  revision() {
    const sortedBikes = [...this.availableBikes].sort((a, b) => a.price - b.price);

    let result = ["Available bikes:"];
    sortedBikes.forEach(bike => {
      result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`);
    });

    result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);
    return result.join("\n");
  }
}


const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
console.log(rentalService.revision());
