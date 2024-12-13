class A {
    private static instance:A | null = null;
    private message:string = 'abc';
    constructor(msg?:string) {
        if(msg) {
            this.message = msg;
        }
        if(A.instance) {
            return A.instance
        } else {
            console.log('instance created');
            A.instance = this;
            return this;
        }
    }

    getMessage() {
        console.log(this.message);
    }
}

const a1 = new A('hell1o');
const a2 = new A();

a1.getMessage();
a2.getMessage();