interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any
}

//task 2
interface Directors extends Teacher {
    numberOfReports: number;
}
//task 3
interface printTeacherFunction {
    (firstName: string,
    lastname: string): string
}
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`

//task 4
interface StudentClassInterface {
    firstName: string;
    lastName: string;
}
interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface; 
}
class StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomeWork = (): string => {
        return 'Currently working';
    }
    dispalyName = (): string => {
        return this.firstName;
    }
}
function createStudent(clsStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new clsStudent(firstName, lastName);
}

//task 1 Example
const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher1);

//task2 Example
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

//task 3 Example
console.log(printTeacher("John", "Doe"));

//task 4 Example
const student1 = createStudent(StudentClass, 'mike', 'tyson');
console.log(student1);