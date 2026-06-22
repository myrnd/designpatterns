type Menu = {
  name: string;
  category: string;
  price: number;
};

const menu: Menu[] = [
  {
    name: "Soup",
    category: "Starter",
    price: 10.99,
  },
  {
    name: "Salad",
    category: "Starter",
    price: 8,
  },
  {
    name: "Cake",
    category: "Dessert",
    price: 7,
  },
  {
    name: "Ice Cream",
    category: "Dessert",
    price: 10,
  },
  {
    name: "Chicken Wrap",
    category: "Main Course",
    price: 20,
  },
];

class Context { // data source
  public menuItem: Menu[];

  constructor(menuItem: Menu[]) {
    this.menuItem = menuItem;
  }
}

interface Expression {
  interpret(context: Context): Menu[];
}

class CategoryExpression implements Expression {
  private category: string;

  constructor(category: string) {
    this.category = category;
  }

  interpret(context: Context): Menu[] {
    return context.menuItem.filter((menu) => menu.category === this.category);
  }
}

class PriceExpression implements Expression {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  interpret(context: Context): Menu[] {
    return context.menuItem.filter((menu) => menu.price <= this.price);
  }
}

class AndExpression implements Expression {
  private expr1: Expression;
  private expr2: Expression;

  constructor(exp1: Expression, exp2: Expression) {
    this.expr1 = exp1;
    this.expr2 = exp2;
  }

  interpret(context: Context): Menu[] {
    const result1 = this.expr1.interpret(context);
    const result2 = this.expr2.interpret(context);

    return result1.filter((menu) => result2.includes(menu));
  }
}

// 

const context = new Context(menu);

const desertCategoryExpression = new CategoryExpression("Dessert");
const starterCategoryExpression = new CategoryExpression("Starter");
const priceExpression = new PriceExpression(10);

const andExpress = new AndExpression(priceExpression, desertCategoryExpression );

console.log(desertCategoryExpression.interpret(context));
console.log(priceExpression.interpret(context));
