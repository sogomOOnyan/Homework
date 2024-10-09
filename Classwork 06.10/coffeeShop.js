class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  /*******************************************************/

  addOrder(order) {
    const menuItem = this.menu.find(({ name }) => name === `${order}`);
    if (menuItem) {
      this.orders.push(menuItem);
      return `${order} has been added to the list`;
    }
    return `Item ${order} is unavailable`;
  }

  /*******************************************************/

  cheapestItem() {
    const cheapest = this.menu.reduce(
      (min, item) => {
        const { price, name } = item;
        return price < min.price ? item : min;
      },
      { price: Infinity }
    );
    return cheapest.name;
  }

  /*******************************************************/

  dueAmount() {
    return this.orders.reduce((total, { price }) => total + price, 0);
  }
  /*******************************************************/

  drinksOnly() {
    return this.menu.filter((order) => order.type === "drink");
  }

  /*******************************************************/

  foodOnly() {
    return this.menu.filter((order) => order.type === "food");
  }

  /*******************************************************/

  fulfillOrder() {
    if (this.orders.length > 0) {
      let readyOrder = this.orders[0];
      this.orders.shift();
      return `The ${readyOrder.name} is ready!`;
    } else return "All orders have been fulfilled";
  }

  /*******************************************************/

  listOrders() {
    return this.orders;
  }
}

const tcsMenu = [
  { name: "Burger", price: 5.99, type: "food" },
  { name: "Fries", price: 2.99, type: "food" },
  { name: "Soda", price: 1.99, type: "drink" },
  { name: "Salad", price: 4.99, type: "food" },
  { name: "Water", price: 0.99, type: "drink" },
  { name: "Iced Coffee", price: 2.49, type: "drink" },
  { name: "Green tea", price: 1.99, type: "drink" },
  { name: "Cappuccino", price: 3.99, type: "drink" },
  { name: "Cheesecake", price: 5.99, type: "food" },
];

let tcs = new CoffeeShop("Smbati mot", tcsMenu);

console.log(tcs.addOrder("Soda"));
console.log(tcs.addOrder("Fries"));
console.log(tcs.addOrder("chupachups"));
console.log(tcs.listOrders());
console.log(tcs.cheapestItem());
console.log(tcs.dueAmount());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.fulfillOrder());
console.log(tcs.foodOnly());
console.log(tcs.drinksOnly());
