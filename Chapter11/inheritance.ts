// extends to inherit --> Accessing Existing Objects Functionality == child extends parent
// implements to use parent --> Get signature of objects to implement == interfaces will be implemented


// Parent Class
class Car {
    manufacturer:string;
    model:string;
    year:number;

    constructor(manufacturer:string, model:string, year:number) {
        this.manufacturer= manufacturer;
        this.model = model;
        this.year = year;
    }

    startEngine(){
        console.log(`Car(${this.manufacturer}-${this.model}) is started`);
    }

    stopEngine(){
        console.log(`Car(${this.manufacturer}-${this.model}) is stopped`);
    }
}

// Child Class because we are extending it not needs to repeat objects like in interface
class Bmw extends Car {
    parkingAssistEnabled:boolean;

    constructor(manufacturer:string, model:string, year:number, parkingAssistEnabled:boolean) {
        super(manufacturer, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
}

class Mercedes extends Car {
    isSportCasa:boolean;

    constructor(manufacturer:string, model:string, year:number, isSportCasa:boolean) {
        super(manufacturer, model, year);
        this.isSportCasa = isSportCasa;
    }

    // Overriding
    startEngine(){
        console.log(`Mercedes (${this.model}) is started remotely`);
    }
}

let bmw = new Bmw("bmw", "328i", 2022, true);
bmw.startEngine();
bmw.stopEngine();

let mercedes = new Mercedes("mercedes", "S", 2022, true);
mercedes.startEngine();
mercedes.stopEngine();
