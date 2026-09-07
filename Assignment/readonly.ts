class Student {
    readonly studentId: number;
    name: string;

    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }

    display() {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);
    }
}
const student = new Student(5008, "Akira Kundu");
student.display();
// student.studentId = 2000; // Error
