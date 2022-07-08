class Student {
    public name:string;
    public readonly lastName:string;
    private _id:number;

    getId():number {
        return this._id;
    }

    setId(id:number):void {
        this._id = id;
    }
}

let student = new Student();
student.name = "Sevil";
// student.lastName = "Saracoglu";
student.setId(123);
console.log(`Access Modifiers -> Student ${student.name} with ID: ${student.getId()} `);

