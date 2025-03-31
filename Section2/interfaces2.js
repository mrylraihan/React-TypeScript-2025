var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
var employee1 = new Employee("Wayel", 33);
console.log(employee1);
var Employee2 = /** @class */ (function () {
    function Employee2(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    return Employee2;
}());
var employee2 = new Employee2('Wayel', 33, "Yemen");
console.log(employee2);
