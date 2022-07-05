var email = "test@test.com";
var atposition = email.indexOf('@');
var dotposition = email.indexOf('.');
if (atposition == -1 || dotposition == -1) {
    console.log("This email ".concat(email, " address is invalid"));
}
else {
    console.log("This email ".concat(email, " address is valid!"));
}
