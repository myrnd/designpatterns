interface IPaymentService {
    processPayment(amount: number): void;
}

class PaymentService implements IPaymentService {
    processPayment(amount: number): void {
        // 10$ >
        console.log(`Processing payment of ${amount}`);
    }
}

class PaymentServiceProxy implements IPaymentService {
    private paymentService: PaymentService;

    constructor(paymentService: PaymentService) {
        this.paymentService = new PaymentService();
    }

    processPayment(amount: number): void {
        //extra processing like checking role and extracing other imporation
        
        this.paymentService.processPayment(amount);
    }
}


const paymentProxyService = new PaymentServiceProxy(new PaymentService());

paymentProxyService.processPayment(15);

