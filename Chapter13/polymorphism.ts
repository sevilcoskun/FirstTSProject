// Polymorphism, create different objects/classes from a parent
class Employee {
    public firstName:string;
    public lastName:string;
    public department:string;

    constructor(firstName:string, lastName:string, department:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }

    public print():void {
        console.log(`Employee Details : ${this.firstName} ${this.lastName} works in ${this.department}`)
    }
}

class Manager extends Employee {
    public numberOfEmployee:number;

    constructor(firstName:string, lastName:string, department:string, numberOfEmployee:number) {
        super(firstName, lastName, department);
        this.numberOfEmployee = numberOfEmployee;
    }

    public print():void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} manages ${this.numberOfEmployee} employee in ${this.department} department`);
    }
}

class Developer extends Employee {
    public seniorityLevel:number;

    constructor(firstName:string, lastName:string, department:string, seniorityLevel:number) {
        super(firstName, lastName, department);
        this.seniorityLevel = seniorityLevel;
    }

    public print():void {
        super.print();
        console.log(`${this.firstName} ${this.lastName} is a ${this.seniorityLevel} level developer`);
    }
}

let employees:Employee[] = [
    new Developer("Mark", "Black", "IT", 1),
    new Developer("Alice", "Yellow", "IT", 2),
    new Manager("John", "Smith", "IT", 20)
];

// for(let employee of employees) {
//     employee.print();
// }

employees.forEach(employee => {
    employee.print();
});


