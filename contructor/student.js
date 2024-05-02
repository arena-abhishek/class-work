class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}

let student1 = new Student("Aman", 19, "UI/UX");
student1.getDetails();

let student2 = new Student("Abhishek", 20, "GWDD+");
student2.getDetails();

