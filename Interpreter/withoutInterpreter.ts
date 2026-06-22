type MenuItem = {
  name: string;
  category: string;
  price: number;
};

const menuItem: Menu[] = [
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

function filterMenu(menu: Menu[], filter: string): Menu[] {
  if (filter === "Category = Dessert AND Price < 10") {
    return menu.filter(
      (item) => item.category === "Dessert" && item.price < 30
    );
  }
  if (filter === "Category = Dessert AND Price < 8") {
    return menu.filter(
      (item) => item.category === "Dessert" && item.price < 8
    );
  }
  return [];
}

const filteredMenu = filterMenu(menuItem, "Category = Dessert AND Price < 10")
const filteredMenu1 = filterMenu(menuItem, "Category = Dessert AND Price < 8")
console.log(filteredMenu);
console.log(filteredMenu1);

