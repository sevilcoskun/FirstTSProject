/* TypeScript
var name:type = value
 */

let n1:number = 10;
console.log("Variables -> Number : " , n1);

let s1:String = "I'm the developer of this project";
let s2:String = `X is the contributor of this project`;
console.log("Variables -> String : " , s1);
console.log("Variables -> String : " , s1);

let b1:boolean = true;
console.log("Variables -> boolean : ", b1);

//You can assign and create a new object what ever you want
let a1:any = {
    productId:1,
    productName:"Item-1",
    productPrice:"100"
};
console.log("Variables -> any object : ", a1);

// Homogeneous Array
let arr1:Array<string> = ["Obj1","Obj2", "Obj3"];
console.log("Variables -> Homogeneous array : ", arr1);

// Heterogeneous Array
let arr2:Array<any> = ["Objx", 100, true];
console.log("Variables -> Heterogeneous array : ", arr2);

