export class Inventory {
  checkStock(productId: string): boolean {
    console.log(`Checking stock for product ${productId}`);
    return true;
  }
}

export class Payment {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount}`);
    return true;
  }
}

export class Shipping {
  calculateShipping(address: string): string {
    console.log(`Calculating shipping for address: ${address}`);
    return "5-7 business days";
  }

  shipProduct(productId: string): void {
    console.log(`Shipping product ${productId}`);
  }
}
