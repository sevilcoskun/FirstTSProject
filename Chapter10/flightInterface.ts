interface FlightInterface {
    flightNo:number;
    from:string;
    to:string;
    display():void;
}

class Flight implements FlightInterface {
    flightNo:number;
    from:string;
    to:string;

    constructor(flightNo:number, from:string, to:string) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }

    display() {
        console.log(`Class Interface -> This flight(${this.flightNo}) is From: ${this.from} To: ${this.to}`);
    }
}

let f1 = new Flight(1, "AMS", "IST");
f1.display();
