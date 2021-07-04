export { }
let message = "Hello World";
console.log(message);

let name: string = "Yash";
console.log(`My name is ${name}`);

class Employee {
    ename: string;

    constructor(name: string) {
        this.ename = name;
    }

    greet() {
        console.log(`Hello. Welcome Oh Mighty, ${this.ename}!`);
    }

}

let emp = new Employee("Yash");
console.log(emp.ename);
emp.greet();

class Manager extends Employee {

    constructor(mname: string) {
        super(mname);
    }

    delegate() {
        console.log(`Keep Hustlin.`);
    }

}

let mng = new Manager("Raj");
console.log(`The grand winner is ${mng.ename}`);
mng.delegate();