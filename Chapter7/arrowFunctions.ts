/* Arrow Functions
 variable name = () => do something
 variable name = () => if you want to return something make it inside {return do something}
 */

let doubleMe = (num:number) => num*2;
let multiplyUs = (num1:number, num2:number) => {return num1*num2};

// console.log(`Arrow Chapter6 -> ${doubleMe(1)}`);
// console.log(`Arrow Chapter6 -> ${returnDoubleMe(2)}`);

let printMe = () => {
    console.log("Arrow Chapter6 -> " + doubleMe(1));
    console.log("Arrow Chapter6 -> " + multiplyUs(2, 4));
}
printMe();


