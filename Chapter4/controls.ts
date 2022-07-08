/*
Selection Statements -> If-Else , switch
 */
let x: number = 10;
let y: number = 10;

if (x == y){
    console.log("x equals to y");
}
else {
   console.log("x is not equal to y");
}

switch (x) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    default:
        console.log(`default case ${x}`);
}

/*
Iterative Statements-> While,for
 */
while(x < 15){
    console.log("While loop iteration: ", x);
    x++;
}

/*
Transfer Statements -> break
 */
