
class SchoolStudent {
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getEmail(): string {
        return this.email;
    }
}

interface Student {
    getName(): string;
    getSurname(): string;
    getEmail(): string;
}

class CollegeStudent implements Student{
    private name: string;
    private surname: string;
    private email: string;

    constructor(name: string, surname: string, email: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    public getName(): string {
        return this.name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public getEmail(): string {
        return this.email;
    }
}


class StudentAgency {
    private students: Student[] = [];

    public getStudentList(): Student[] {
        return this.students;
    }

    public addStudent(student: Student) {
        this.students.push(student);
    }
}

const studentAgentcy = new StudentAgency();
studentAgentcy.addStudent(new CollegeStudent('Anil', 'Kumar', 'ui.anilk@gmail.com'));
studentAgentcy.addStudent(new CollegeStudent('Dharam', 'Kumar', 'dk.dharam@gmail.com'));

console.log(studentAgentcy.getStudentList());

//studentAgentcy.addStudent(new SchoolStudent('Dharam', 'Kumar', 'dk.dharam@gmail.com'));


class SchoolStudentAdapter implements Student {
    private schoolStudent: SchoolStudent;

    constructor(schoolStudent: SchoolStudent) {
        this.schoolStudent = schoolStudent;
    }

    public getName(): string {
        return this.schoolStudent.getFirstName();
    }

    public getSurname(): string {
        return this.schoolStudent.getLastName();
    }

    public getEmail(): string {
        return this.schoolStudent.getEmail();
    }
}

const schoolStudent = new SchoolStudent('Dharam', 'Kumar', 'dk.dharam@gmail.com');
studentAgentcy.addStudent(new SchoolStudentAdapter(schoolStudent));
console.log(studentAgentcy.getStudentList());



