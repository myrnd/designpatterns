interface Device {
    turnOn(): void;
    turnOff(): void;
    setVolume(level: number);
}

class TV implements Device {
    public turnOn(): void {
        console.log('TV is now ON');
    }

    public turnOff(): void {
        console.log('TV is now OFF');
    }

    public setVolume(level: number) {
        console.log('TV volume set to ', level);
    }
}


class Radio implements Device {
    public turnOn(): void {
        console.log('Radio is now ON');
    }

    public turnOff(): void {
        console.log('Radio is now OFF');
    }

    public setVolume(level: number) {
        console.log('Radio volume set to ', level);
    }
}

class Walkman {
    public switchOn() {

    }
}

abstract class RemoteControlFeatures {
    protected device: Device; //bridge design pattern

    public constructor(device: Device) {
        this.device = device;
    }

    public turnOn() {
        this.device.turnOn();
    }

    public turnOff() {
        this.device.turnOff();
    }

    public setVolume(level: number) {
        this.device.setVolume(level);
    }
}

class RemoteControl extends RemoteControlFeatures {
    constructor(device: Device) {
        super(device);
    }
}

class AdvRemoteControl extends RemoteControlFeatures {
    constructor(device: Device) {
        super(device);
    }

    public mute(): void {
        this.device.setVolume(0);
    }
}

// Bridge Design Pattern Demo
const tv = new TV();
const radio = new Radio();

const tvRemote = new RemoteControl(tv);
const radioRemote = new AdvRemoteControl(radio);
const newTv = new AdvRemoteControl(tv);


const wman = new Walkman();

class WalkmanAdapter implements Device {
    private walkman: Walkman;

    constructor(walkman: Walkman) {
        this.walkman = walkman;
    }

    turnOn(): void {
        this.walkman.switchOn();
    }
        
    turnOff(): void {
        //this.walkman.switchOn();//
    }
       
    setVolume(): void {
        //this.walkman.switchOn();
    }
       
}

const adapter = new WalkmanAdapter(wman);

const wmanRemote = new AdvRemoteControl(adapter);

wman.switchOn();

newTv.turnOn();
newTv.mute();


tvRemote.turnOn();
tvRemote.setVolume(8);


radioRemote.turnOn();
radioRemote.setVolume(6);
radioRemote.mute();

