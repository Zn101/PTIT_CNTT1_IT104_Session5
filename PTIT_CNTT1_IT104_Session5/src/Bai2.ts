class Student {
    id: number;
    age: number;
    email: string;
    constructor (id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    getInfo() {
        return (`id: ${this.id}, age: ${this.age}, email: ${this.email}`)
    }
}

let students: Student[] = [];
students.push(new Student(1, 1, "Nguyen A"));
students.push(new Student(2, 2, "Nguyen B"));
students.push(new Student(3, 3, "Nguyen C"));

for (let student of students) {
    console.log(student.getInfo())
}