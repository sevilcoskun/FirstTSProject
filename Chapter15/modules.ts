import {add as sum} from './calculator';
import sub from './calculator';
import {Calculator} from "./calculator";

let c = new Calculator();
c.print();

console.log("add 5 and 10 = " + sum(5, 10));
console.log("sub 10 and 5 = " + sub(10, 5));
