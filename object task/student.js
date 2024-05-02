class Student {
  constructor(name, age, course) {
    (this.name = name), (this.age = age), (this.course = course);
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}

let student1 = new Student("Nitin", 19, `b.com (Delhi university)`);
student1.getDetails();

let student2 = new Student("Sujal", 19, `b.com (Delhi university)`);
student2.getDetails();

let student3 = new Student("Mannu", 20, `b.com (ignou)`);
student1.getDetails();


