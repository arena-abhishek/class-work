// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// // let user = new User("Jack");

// // console.log(user.name); // Jack
// // console.log(user.isAdmin); // false
// // console.log(user)

// let user1 = new User("Aman");
// let user2 = new User("Abhishek");

// console.log(user1, user2)

const student1 = {
  name: "Aman",
  age: 19,
  course: "UI/UX",
  getDetails: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  },
};

const student2 = {
  name: "Abhishek",
  age: 20,
  course: "GWDD+",
  getDetails: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  },
};

student1.getDetails();
student2.getDetails();
