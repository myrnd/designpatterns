// Bridge design pattern: 

// debit card -> deduction, refund
// credit card -> deduction, refund
// band transfer -> deduction, refund

class DebitCardProcessing {
    processPayment(payment: number): void {
        console.log("Processing debit card payment");
    }

    refundPayment(payment: number): void {
        console.log("Refunding debit card payment");
    }
}

class CreditCardProcessing {
    processPayment(payment: number): void {
        console.log("Processing debit card payment");
    }

    refundPayment(payment: number): void {
        console.log("Refunding debit card payment");
    }
}

class BandTransferProcessing {
    processPayment(payment: number): void {
        console.log("Processing debit card payment");
    }

    refundPayment(payment: number): void {
        console.log("Refunding debit card payment");
    }
}

const c1 = new CreditCardProcessing();
c1.processPayment(20);
