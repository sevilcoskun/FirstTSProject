// Create Class
//Create Objects
// Initialize Properties

class Passenger{
    firstName:string;
    lastName:string;
    frequentFlightNumber:number;

    // Constructor; to initialize objects
    constructor(firstName:string, lastName:string, frequentFlightNumber:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlightNumber = frequentFlightNumber;
    }

    // Functions
    display() {
        console.log(`Classes example with function -> Passenger: ${this.firstName} ${this.lastName} and FlightNumber: ${this.frequentFlightNumber}`);
    }
}

let passenger = new Passenger("Sevil", "Coskun", 17);
console.log(`Classes example -> Passenger: ${passenger.firstName} ${passenger.lastName} and FlightNumber: ${passenger.frequentFlightNumber}`);

passenger.display();

// For-in and instance of
for(let item in passenger){
    console.log(`For-in loop item(key)-> ${item} `);
    console.log(`For-in loop passenger[item](value) -> ${passenger[item]} `);
}

