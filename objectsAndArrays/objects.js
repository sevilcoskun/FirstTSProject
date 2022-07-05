var student = {
    firstname: "Sevil",
    surname: "Coskun",
    age: 30
};
console.log("Objects and Arrays -> call a property of an object : ".concat(student.firstname));
for (var s in student) {
    console.log("each key of the object : ".concat(s));
    console.log("each value of the object : ".concat(student[s]));
}
// Destructuring Objects
var sname = student.firstname;
var ssurname = student.surname;
var sage = student.age;
console.log("Destructing Objects1 -> ".concat(sname, " and ").concat(ssurname, " and ").concat(sage, " ."));
var firstname = student.firstname, age = student.age;
console.log("Destructing Objects2 -> ".concat(firstname, " and ").concat(age, " ."));
