interface BreatheInterface {
    breathe(): void;
}

class LandBreatheImplementation implements BreatheInterface{
    public breathe(): void {
        //Breathe though NOSE
        //Inhale oxygen from Air
        //Exhale carbon dioxide through NOSE


        console.log('LAND Breathe process');
    }
}

class WaterBreatheImplementation implements BreatheInterface{
    public breathe(): void {
       //Breathe through GILL
        //Absorb Oxygen from water
        //Release Carbon Dioxide

        console.log('WATER Breathe process');
    }
}

class TreeBreatheImplementation implements BreatheInterface {
    public breathe(): void {
        //Breathe through LEAVES
        //Inhale Carbon Dioxide
        //Exhale Oxygen through Photosynthesis process    

        console.log('TREE Breathe process');
    }
}

abstract class LivingThings {
    breatheImplementor: BreatheInterface;


    constructor(breatheImplementor: BreatheInterface) {
        this.breatheImplementor = breatheImplementor;
    }
    abstract breatheProcess(): void;
}

class Dog extends LivingThings {
    constructor(breatheImplementor: BreatheInterface) {
        super(breatheImplementor);
    }

    breatheProcess(): void {
        this.breatheImplementor.breathe();
    }
}

class Fish extends LivingThings {
    constructor(breatheImplementor: BreatheInterface) {
        super(breatheImplementor);
    }

    breatheProcess(): void {
        this.breatheImplementor.breathe();
    }
}

class Tree extends LivingThings {
    constructor(breatheImplementor: BreatheInterface) {
        super(breatheImplementor);
    }

    breatheProcess(): void {
        this.breatheImplementor.breathe();
    }
}


const dog = new Dog(new LandBreatheImplementation());
const fish = new Fish(new WaterBreatheImplementation());
const tree = new Tree(new TreeBreatheImplementation());


dog.breatheProcess();
fish.breatheProcess();
tree.breatheProcess();