// Client Code
import { Inventory, Payment, Shipping } from "./subsystems";

function order() {
  const inventory = new Inventory();
  const payment = new Payment();
  const shipping = new Shipping();

  if (!inventory.checkStock("macbook")) {
    return console.log('Out of stock')
  }

  if (!payment.processPayment(1000)) {
    return console.log('Payment failed')
  }

  const delivery = this.shipping.calculateShipping('hajipur')
  console.log('Delivery Time ', delivery);

  this.shipping.shipProduct("macbook");
}

order();
