// object
const Student1 = {
  name: `Mannu`,
  age: 20,
  course: `b.com (ignou)`,
  getDetails: function () {
    console.log(`Name:${this.name},Age:${this.age},course:${this.course}`);
  },
};
const Student2 = {
  name: `Sujal `,
  age: 19,
  course: `b.com (Delhi university)`,
  getDetails: function () {
    console.log(`Name:${this.name},Age:${this.age},course:${this.course}`);
  },
};
const Student3 = {
  name: `Nitin`,
  age: 19,
  course: `b.com (Delhi university)`,
  getDetails: function () {
    console.log(`Name:${this.name},Age:${this.age},course:${this.course}`);
  },
};
Student1.getDetails();
Student2.getDetails();
Student3.getDetails();
