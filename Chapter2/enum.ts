
// Enum values are constants, and they can be accessible only read-access
enum Gender {
    Female,
    Male,
    Nonbinary
}

console.log("Enum -> by index : ", Gender[0]); // to get value of it
console.log("Enum -> by object : ", Gender.Female) // to get index of that object

enum Weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log("Enum -  weekdays[Sunday] : ", Weekdays.Sunday);
