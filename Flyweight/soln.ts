// Flyweight
class Category {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class CategoryFactory {
  private categories: Map<string, Category> = new Map();  // shared space

  getCategory(name: string):Category {
    if (!this.categories.has(name)) {
      console.log(`Creating category: ${name}`);
      this.categories.set(name, new Category(name));
    }
    return this.categories.get(name)!;
  }
}

class ResMenuItem {
  name: string;
  price: number;
  category: Category;

  constructor(name: string, price: number, category: Category) {
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

class Res {
  private menuItems: ResMenuItem[] = [];
  private categoryFactory: CategoryFactory = new CategoryFactory();

  addMenuItem(name: string, categoryName: string, price: number): void {
    const category = this.categoryFactory.getCategory(categoryName);
    const menuItem = new ResMenuItem(name, price, category);
    this.menuItems.push(menuItem);
  }

  displayMenu() {
    this.menuItems.forEach((menuItem) => menuItem.display());
  }
}



const r1 = new Res();

r1.addMenuItem("Pasta Carbonara", "Pasta", 12.99);
r1.addMenuItem("Pasta Carbonara 1", "Pasta", 12.89);
r1.addMenuItem("Pasta Carbonara 2", "Pasta", 11.89);
