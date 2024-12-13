import { Inventory, Payment, Shipping } from "./subsystems";

class OrderFacade {
  private inventory: Inventory;
  private payment: Payment;
  private shipping: Shipping;

  constructor() {
    this.inventory = new Inventory();
    this.payment = new Payment();
    this.shipping = new Shipping();
  }

  placeOrder(productId: string, amount: number, address: string) {
    console.log("Placing order...");

    if (!this.inventory.checkStock(productId)) {
      console.log("Product is out of stock.");
      return;
    }

    if (!this.payment.processPayment(amount)) {
      console.log("Payment failed.");
      return;
    }

    const deliveryTime = this.shipping.calculateShipping(address);
    console.log(`Estimated delivery time: ${deliveryTime}`);

    this.shipping.shipProduct(productId);

    console.log("Order placed successfully!");
  }
}

const orderFacade = new OrderFacade();
orderFacade.placeOrder("12345", 100, "123 Main St, Cityville");

