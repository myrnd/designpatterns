class MenuItem {
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  display() {
    console.log(
      `Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`
    );
  }
}

class Restaurant {
  private menuItems: MenuItem[] = [];

  addMenuItem(name: string, category: string, price: number): void {
    const menuItem = new MenuItem(name, price, category);
    this.menuItems.push(menuItem);
  }

  displayMenu() {
    this.menuItems.forEach((menuItem) => menuItem.display());
  }
}

const restaurant = new Restaurant();

restaurant.addMenuItem("Coca Cola", "Beverages", 2.5);
restaurant.addMenuItem("Pepsi", "Beverages", 2.5);
restaurant.addMenuItem("French Fries", "Snacks", 3.0);
restaurant.addMenuItem("Spring Rolls", "Snacks", 4.0);

restaurant.displayMenu();
