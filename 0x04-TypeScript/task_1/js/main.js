"use strict";
exports.__esModule = true;
exports.printTeacher = void 0;
var printTeacher = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.workOnHomeWork = function () {
            return 'Currently working';
        };
        this.dispalyName = function () {
            return _this.firstName;
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return StudentClass;
}());
function createStudent(clsStudent, firstName, lastName) {
    return new clsStudent(firstName, lastName);
}
//task 1 Example
var teacher1 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher1);
//task2 Example
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
//task 3 Example
console.log((0, exports.printTeacher)("John", "Doe"));
//task 4 Example
var student1 = createStudent(StudentClass, 'mike', 'tyson');
console.log(student1);
