function printMessage(message:string){
    console.log(`Here is your message -> ${message}`);
}

function sum(n1:number, n2:number):number {
    return n1 + n2;
}

//Invoke the function
printMessage("function is running!");

let a = 10;
let b = 20;
printMessage(`${a} + ${b} = ${sum(10, 20)}`);

// Using Optional Parameters
function addItems(item1:string, item2?:string):string {
    if(item2==undefined){
        return "Please give 2nd value";
    }
    return `List of items -> ${item1}, and ${item2}`;
}
printMessage(addItems("Sevil"));

// Default Value Parameters
function addItems2(item1:string, item2:string="Default Item"):string {
    return `List of items -> ${item1}, and ${item2}`;
}
printMessage(addItems2("Sevil"));


// Pass Function as a parameter
function calculator(fun:any):void {
    printMessage(`Pass function as a parameter -> ${fun(20,30)}  `);
}
calculator(sum);



// Function will return another function
function callSubtract():any{
    function subtract(num1:number, num2:number):number{
        return num1-num2;
    }
    return subtract;
}
// let sub = callSubtract();
// sub(20,50);
// Short way to do it is callFunction() -> it returns a function therefore we can use as callFunction()(return function parameter)
printMessage(`Function will return another function example -> ${callSubtract()(20, 5)} `);

// Anonymous Function
// You need to assign that anonymous Chapter6 to use it later on
const fun = function (name:string):string{
    return "Hello " + name;
}

console.log(`Anonymous Function -> ${fun("Sevil")} `);

// Rest Params and Variable Arguments
// let nums:Array<number> = [1, 2, 3, 4];
let product = function (...nums){
    let result = 1;
    nums.forEach(num => {
        result *= num;
    });
    return result;
}

// You can call with different number of parameters of this function thanks to Rest param
console.log(`Rest Params Example ${product(1,2,3,4)} `);
console.log(`Rest Params Example ${product(10,20)} `);

