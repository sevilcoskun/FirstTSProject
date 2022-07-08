/*
    var     : available in entire places
    let     : available in block scope
    const   : if you want to have an object not to be changed by someone else
    declare :
 */

// var
for(var v = 0; v < 10; v++){
    console.log(`Inside of for with var: ${v}`);
}
console.log(`outside of for with var: ${v}`);

// let
for(let l = 0; l < 10; l++){
    console.log(`Inside of for with let: ${l}`);
}
// console.log(l); --> cannot use it because let is only available in block scope


// const
const pi = 3.14;
console.log(`Constant variable -> ${pi}`);
// pi = 4; cannot reassign


// constant object, array can be adjustable
const shape = {
    name: "Square",
    formula: "width * width"
}
console.log(`Constant variable -> name:${shape.name} , formula: ${shape.formula}`);

