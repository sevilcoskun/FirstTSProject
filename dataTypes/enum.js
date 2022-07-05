// Enum values are constants, and they can be accessible only read-access
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Nonbinary"] = 2] = "Nonbinary";
})(Gender || (Gender = {}));
console.log("Enum -> by index : ", Gender[0]); // to get value of it
console.log("Enum -> by object : ", Gender.Female); // to get index of that object
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 6] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log("Enum -  weekdays[Sunday] : ", Weekdays.Sunday);
