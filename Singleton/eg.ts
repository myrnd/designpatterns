// console.log('Singleton');

class Singleton {
  private static instance: Singleton | null = null;
  private message: string = "default message";

  private constructor(msg?: string) {
    console.log("instance created");
    if (msg) this.message = msg;
  }

  public static getInstance(msg?: string) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    {
      Singleton.instance = new Singleton(msg);
      return Singleton.instance;
    }
  }

  public getMessage() {
    console.log(this.message);
  }
}

// const instace1 = new Singleton();
// const instace2 = new Singleton();
// const instace3 = new Singleton();

const i1 = Singleton.getInstance('instance 1 created');
const i2 = Singleton.getInstance();

i1.getMessage();
i2.getMessage();
