// Define a set of rules for an object, array, class. Only in Compile time
// functions interfaces
// arrays interfaces

interface IStudent{
    firstName:string;  // Declaration of property
    lastName:string;  // Declaration of property
    score:number;     // Declaration of property
    display():void;   // Declaration of property
    course?:string;   // Optional Property Declaration
}

let student1:IStudent = {
    firstName: "Sevil",
    lastName: "Coskun",
    score: 10,
    display: () => { console.log(`This is the first student with a full name ${this.firstName} ${this.lastName} `); }
}
student1.display();

let student2:IStudent = {
    firstName: "Abc",
    lastName: "Defg",
    score: 5,
    display: () => { console.log(`This is the second student with a full name ${this.firstName} ${this.lastName} `); },
    course: "Nothing"
}

student2.display();

// Functional Interface
interface Add{
    (x:number, y:number):void
}

interface Sub{
    (x:number, y:number):void
}

let add:Add;
let sub:Sub;

add = (x:number, y:number):void => {
    console.log(`Functional Interface -> of add method ${x+y} `);
}

sub = (x:number, y:number):string => {
    return `Functional Interface -> of sub method ${x-y} `;
}

add(5,7);
console.log(sub(9, 7));





