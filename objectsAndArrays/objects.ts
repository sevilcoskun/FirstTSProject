let student = {
    firstname:"Sevil",
    surname:"Coskun",
    age:30
}

console.log(`Objects and Arrays -> call a property of an object : ${student.firstname}`);

for( let s in student) {
    console.log(`each key of the object : ${s}`);
    console.log(`each value of the object : ${student[s]}`);
}

// Destructuring Objects
let sname = student.firstname;
let ssurname = student.surname;
let sage = student.age;
console.log(`Destructing Objects1 -> ${sname} and ${ssurname} and ${sage} .`);

let {firstname, age} = student;
console.log(`Destructing Objects2 -> ${firstname} and ${age} .`);


