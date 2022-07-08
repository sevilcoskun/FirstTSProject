// Not need to create an object of that class to reach static properties, and methods
class Check {
    static bankName:string = "Bank of Netherlands"; // like a Global variable
    customerName:string;
    accNo:number;
    balance:number;

    constructor(customerName:string, accNo:number, balance:number) {
        this.customerName = customerName;
        this.accNo = accNo;
        this.balance = balance;
    }

    withdraw(amount:number):void {
        console.log(`You withdraw ${amount} amount from your account in ${Check.bankName}. \n Your balance: ${this.balance - amount}`)
    }

    static display():void {
        console.log(`Welcome to ${this.bankName}!`);
    }
}

let check1 = new Check("Sevil Coskun", 123, 100);
let check2 = new Check("Coskun Sevil", 124, 500);

Check.display();
check1.withdraw(10);
Check.bankName = "New Bank"; // overwrite the variable for this object and it effects to change everywhere after than
check2.withdraw(50);

