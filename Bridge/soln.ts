interface PaymentProcss {
    processPayment(payment: number): void;
    refund(payment: number): void;
}

class CreditCard implements PaymentProcss {
    processPayment(payment: number): void {
        console.log(`credit card payment processing: ${payment}`);
    }

    refund(payment: number): void {
        console.log(`refunding card payment: ${payment}`);
    }
}

class PayPal implements PaymentProcss {
    processPayment(payment: number): void {
        console.log(`paypal  payment processing: ${payment}`);
    }

    refund(payment: number): void {
        console.log(`paypal payment: ${payment}`);
    }
}

class UPI implements PaymentProcss {
    processPayment(payment: number): void {
        console.log(`UPI  payment processing: ${payment}`);
    }

    refund(payment: number): void {
        console.log(`UPI payment: ${payment}`);
    }
}

abstract class PaymentProcessing {
    private paymentProcessors: PaymentProcss;  // bridge

    constructor(paymentProcessors: PaymentProcss) {
        this.paymentProcessors = paymentProcessors;
    }

    processPayment(payment: number): void {
        this.paymentProcessors.processPayment(payment);
    }

    refund(payment: number): void {
        this.paymentProcessors.refund(payment);
    }
}

abstract class AdvancePaymentProcessing {

}

const creditCard = new CreditCard();
const payPal = new PayPal();

class Paytm extends PaymentProcessing {
    constructor(paymentProcessors: PaymentProcss) {
        super(paymentProcessors)
    }
}

const paytm1 = new Paytm(new UPI());
const paytm2 = new Paytm(new CreditCard());

paytm1.processPayment(100); //UPI
paytm2.processPayment(30); //Credit Card
