let email:string = "test@test.com"
let atposition:number = email.indexOf('@');
let dotposition:number = email.indexOf('.');

if(atposition == -1 || dotposition == -1){
    console.log(`This email ${email} address is invalid`);
}
else{
    console.log(`This email ${email} address is valid!`);
}
