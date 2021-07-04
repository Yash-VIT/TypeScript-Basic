"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var name = "Yash";
console.log("My name is " + name);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.ename = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello. Welcome Oh Mighty, " + this.ename + "!");
    };
    return Employee;
}());
var emp = new Employee("Yash");
console.log(emp.ename);
emp.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mname) {
        return _super.call(this, mname) || this;
    }
    Manager.prototype.delegate = function () {
        console.log("Keep Hustlin.");
    };
    return Manager;
}(Employee));
var mng = new Manager("Raj");
console.log("The grand winner is " + mng.ename);
mng.delegate();
