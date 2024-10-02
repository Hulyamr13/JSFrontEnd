class InventoryManager {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = [];
    this.outOfStock = [];
  }

  addItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    if (this.items.length >= this.capacity) {
      throw new Error("The inventory is already full.");
    }

    let existingItem = this.items.find(item => item.itemName === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }


  sellItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    let itemIndex = this.items.findIndex(item => item.itemName === itemName);
    if (itemIndex === -1) {
      throw new Error(`The item ${itemName} is not available in the inventory.`);
    }

    let item = this.items[itemIndex];
    if (item.quantity < quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    item.quantity -= quantity;
    if (item.quantity === 0) {
      this.items.splice(itemIndex, 1);
      this.outOfStock.push(itemName);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    let existingItem = this.items.find(item => item.itemName === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    let outOfStockIndex = this.outOfStock.indexOf(itemName);
    if (outOfStockIndex !== -1) {
      this.outOfStock.splice(outOfStockIndex, 1);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let summary = `Current Inventory:\n`;
    summary += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
    if (this.outOfStock.length > 0) {
      summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
    }
    return summary;
  }
}


// Test Cases
const manager = new InventoryManager(2);

console.log(manager.addItem("Hammer", 10));  // Expected: Added 10 Hammer(s) to the inventory.
console.log(manager.addItem("Level", 5));    // Expected: Added 5 Level(s) to the inventory.

try {
  console.log(manager.addItem("Drill", 3));  // Expected: Error: The inventory is already full.
} catch (error) {
  console.error(error.message);
}

console.log(manager.sellItem("Hammer", 10)); // Expected: Sold 10 Hammer(s) from the inventory.
console.log(manager.restockItem("Chisel", 5)); // Expected: Restocked 5 Chisel(s) in the inventory.

console.log(manager.getInventorySummary());
// Expected Output:
// Current Inventory:
// Level: 5
// Chisel: 5
// Out of Stock: Hammer
